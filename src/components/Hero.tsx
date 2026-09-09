import TreeAnimation from "@/components/TreeAnimation"

const CONTACT_EMAIL = "contact@wovenlogic.studio"

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[calc(100dvh-4.5rem)] scroll-mt-6 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute -right-48 top-10 -z-10 size-[34rem] rounded-full border border-olive-800/10 bg-sand-100/45 sm:size-[44rem] lg:-right-36 lg:top-20"
      />

      <div className="container flex min-h-[calc(100dvh-4.5rem)] flex-col">
        <div
          className="grid flex-1 items-center gap-10 py-14 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.6fr)] lg:gap-14 lg:py-20"
        >
          <div className="relative z-10">
            <p className="tag mb-7">Tristin · Principal</p>

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

            <div className="mt-10 grid max-w-5xl gap-6 border-t border-olive-800/25 pt-7 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
              <div className="space-y-4 text-lg leading-relaxed text-[var(--ink-soft)]">
                <p>
                  I’m Tristin. I work across research, strategy, design,
                  technology, experimentation and storytelling, using whatever
                  the problem needs to understand what’s really happening, test
                  possibilities, and find a better way through.
                </p>
                <p className="font-semibold text-ink">
                  Woven Logic Studio is the practice I built to work that way.
                </p>
              </div>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="btn-primary group gap-3 whitespace-nowrap md:justify-self-end"
              >
                Tell me what you’re trying to solve
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-xs opacity-90 sm:max-w-sm lg:max-w-md">
            <TreeAnimation />
            <p className="mt-2 text-center font-syne text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-olive-600">
              Follow the problem
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
