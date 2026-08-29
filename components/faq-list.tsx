import type { Faq } from "@/lib/site";
import { faqAnchor } from "@/lib/seo";

export function FaqList({
  faqs,
  heading = "Questions neighbors ask",
  id = "faq",
}: {
  faqs: Faq[];
  heading?: string;
  id?: string;
}) {
  return (
    <section id={id} className="scroll-mt-28 bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-28">
        <p className="label text-orange">Answers</p>
        <span className="rule mt-5" aria-hidden />
        <h2 className="display mt-6 text-4xl text-navy md:text-5xl">{heading}</h2>
        <dl className="mt-14">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              id={faqAnchor(faq.question)}
              className="scroll-mt-28 border-t border-line py-8"
            >
              <dt>
                <h3 className="display text-2xl text-navy">{faq.question}</h3>
              </dt>
              <dd className="mt-4 leading-relaxed text-mute">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
