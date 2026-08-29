"use client";

import { useActionState } from "react";
import { submitQuote, type QuoteState } from "@/app/actions/quote";
import { services } from "@/lib/site";
import { cn } from "@/lib/utils";

const initialQuoteState: QuoteState = {
  status: "idle",
  message: "",
};

const field = "field-line";

export function QuoteForm() {
  const [state, action, pending] = useActionState(
    submitQuote,
    initialQuoteState,
  );

  if (state.status === "success") {
    return (
      <div className="rounded-xl border border-brass/50 bg-canvas px-8 py-12">
        <p className="label text-orange">Sent</p>
        <p className="display mt-3 text-3xl text-navy">Request received.</p>
        <p className="mt-3 max-w-md leading-relaxed text-mute">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="grid gap-6 rounded-xl border border-line bg-paper/80 px-6 py-8 md:px-8 md:py-10">
      <p className="sr-only" aria-live="polite">
        {state.message}
      </p>
      <div className="hidden" aria-hidden>
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          name="name"
          error={state.fieldErrors?.name}
          autoComplete="name"
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          error={state.fieldErrors?.phone}
          autoComplete="tel"
        />
      </div>
      <Field
        label="Email"
        name="email"
        type="email"
        error={state.fieldErrors?.email}
        autoComplete="email"
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Property address"
          name="address"
          error={state.fieldErrors?.address}
          autoComplete="street-address"
        />
        <Field
          label="City"
          name="city"
          error={state.fieldErrors?.city}
          autoComplete="address-level2"
        />
      </div>

      <fieldset>
        <legend className="label text-mute">What needs washing</legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {services.map((service) => (
            <label
              key={service.slug}
              className="flex min-h-12 cursor-pointer items-center gap-3 border-b border-line py-3 transition-colors hover:border-navy"
            >
              <input
                type="checkbox"
                name="services"
                value={service.name}
                className="accent-orange"
              />
              {service.name}
            </label>
          ))}
        </div>
        {state.fieldErrors?.services ? (
          <p className="mt-2 text-danger">{state.fieldErrors.services[0]}</p>
        ) : null}
      </fieldset>

      <label className="block">
        <span className="label text-mute">Anything else</span>
        <textarea
          name="message"
          rows={4}
          className={field}
          placeholder="Square footage, photos coming, HOA timing…"
        />
      </label>

      {state.status === "error" ? (
        <p className="text-danger">{state.message}</p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className={cn(
          "btn label bg-blue px-8 py-4 text-lg text-white transition-colors hover:bg-navy-2",
          pending && "opacity-70",
        )}
      >
        {pending ? "Sending…" : "Request a quote"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string[];
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="label text-mute">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        className={field}
        required={name !== "message"}
      />
      {error ? <p className="mt-1 text-danger">{error[0]}</p> : null}
    </label>
  );
}
