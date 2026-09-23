import Link from "next/link"

import TreeAnimation from "@/components/TreeAnimation"

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate scroll-mt-6 overflow-hidden"
    >
      <div className="container grid items-start gap-8 py-10 sm:gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(16rem,22rem)] md:gap-12 md:py-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,26rem)] lg:py-16">
        <div className="min-w-0">
          <h1
            id="hero-heading"
            className="max-w-5xl text-[clamp(3rem,7.2vw,7.5rem)] leading-[0.94] tracking-[-0.055em] text-ink"
          >
            <span className="block">
              Complex problems don’t fit neatly into boxes.
            </span>
            <span className="mt-4 block text-olive-700">
              Neither do the best ways of solving them.
            </span>
          </h1>

          <div className="mt-10 border-t border-olive-800/25 pt-7">
            <Link
              href="/contact"
              className="btn-primary group w-fit gap-3 whitespace-nowrap"
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

        <div className="order-first w-full max-w-[17.5rem] sm:max-w-[19rem] md:order-none md:max-w-none md:self-center">
          <TreeAnimation />
          <p className="mt-2 text-center font-syne text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-olive-600">
            Follow the problem
          </p>
        </div>
      </div>
    </section>
  )
}
