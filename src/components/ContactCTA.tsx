import Link from "next/link"

export default function ContactCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-6 bg-terracotta-600 text-sand-50"
    >
      <div className="container py-14 sm:py-16 md:py-24">
        <p className="mb-5 font-syne text-xs font-semibold uppercase tracking-[0.18em] text-sand-100">
          Start with the problem
        </p>
        <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-10">
          <h2
            id="contact-heading"
            className="max-w-4xl text-5xl leading-[0.98] tracking-[-0.045em] text-sand-50 sm:text-6xl lg:text-7xl"
          >
            Have a problem you’re trying to solve?
          </h2>

          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-sand-50 px-6 py-3 font-syne font-semibold text-olive-800 transition-colors hover:bg-olive-800 hover:text-sand-50"
          >
            Tell me what you’re trying to solve
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
