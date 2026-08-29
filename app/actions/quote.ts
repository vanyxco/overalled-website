"use server";

import { Resend } from "resend";
import { z } from "zod";
import { site } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required"),
  phone: z.string().trim().min(7, "Phone is required"),
  email: z.string().trim().email("Valid email required"),
  address: z.string().trim().min(4, "Property address helps us quote"),
  city: z.string().trim().min(2, "City is required"),
  services: z.array(z.string()).min(1, "Pick at least one surface"),
  message: z.string().trim().max(2000).optional(),
  website: z.string().optional(),
});

export type QuoteState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Record<string, string[] | undefined>;
};

export async function submitQuote(
  _prev: QuoteState,
  formData: FormData,
): Promise<QuoteState> {
  const website = String(formData.get("website") ?? "");
  if (website.length > 0) {
    return {
      status: "success",
      message: "Thanks — we will be in touch shortly.",
    };
  }

  const parsed = schema.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    address: formData.get("address"),
    city: formData.get("city"),
    services: formData.getAll("services").map(String),
    message: formData.get("message") || undefined,
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: "Check the highlighted fields and try again.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const lead = parsed.data;
  const html = `
    <h2>New Overalled quote</h2>
    <p><strong>Name:</strong> ${escapeHtml(lead.name)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(lead.phone)}</p>
    <p><strong>Email:</strong> ${escapeHtml(lead.email)}</p>
    <p><strong>Address:</strong> ${escapeHtml(lead.address)}, ${escapeHtml(lead.city)}</p>
    <p><strong>Services:</strong> ${lead.services.map(escapeHtml).join(", ")}</p>
    <p><strong>Notes:</strong> ${escapeHtml(lead.message ?? "—")}</p>
  `;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL ?? site.email;

  if (!apiKey) {
    console.info("[quote lead — add RESEND_API_KEY to email this]", lead);
    return {
      status: "success",
      message:
        "Rocky has the details. He typically replies the same day — or call (832) 836-0979 if it is urgent.",
    };
  }

  const resend = new Resend(apiKey);
  const from =
    process.env.RESEND_FROM ?? "Overalled Website <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: lead.email,
    subject: `Quote request — ${lead.name} — ${lead.city}`,
    html,
  });

  if (error) {
    console.error(error);
    return {
      status: "error",
      message: `Could not send just now. Call ${site.phone} and Rocky will take it.`,
    };
  }

  return {
    status: "success",
    message: "Quote is in Rocky’s inbox. He typically replies the same day.",
  };
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
