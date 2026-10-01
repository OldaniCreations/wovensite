import Image from "next/image"

export default function AboutIntro() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-cream scroll-mt-6"
    >
      <div className="container grid gap-9 py-14 sm:py-16 md:py-24 lg:grid-cols-[minmax(15rem,0.62fr)_minmax(0,1.38fr)] lg:gap-20">
        <div>
          <p className="tag mb-5">About</p>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-10">
            <div className="relative aspect-[3/4] w-full max-w-[10.5rem] shrink-0 overflow-hidden rounded-2xl border border-olive-800/15 bg-sand-100/60 shadow-[0_12px_40px_rgba(53,56,36,0.1)] sm:max-w-[11.5rem] sm:rounded-3xl">
              <Image
                src="/poolBG.jpg"
                alt="Tristin Oldani smiling outdoors by a pool"
                fill
                className="object-cover object-[center_20%]"
                sizes="(min-width: 1024px) 12rem, 42vw"
                priority
              />
            </div>
            <div className="min-w-0">
              <h2
                id="about-heading"
                className="font-syne text-[clamp(2rem,7vw,3.25rem)] font-bold leading-[1.12] tracking-[-0.03em] text-ink"
              >
                Tristin Oldani
              </h2>
              <p className="mt-3 text-lg leading-snug text-[var(--ink-soft)] sm:text-xl">
                Solving complex problems creatively.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl">
          <p className="text-2xl leading-relaxed text-ink">
            I’ve spent my career working on problems that rarely fit neatly
            inside one role.
          </p>

          <div className="mt-6 space-y-5 text-lg leading-relaxed text-[var(--ink-soft)] sm:mt-8 sm:space-y-6">
            <p>
              Sometimes I’m researching to understand what’s really happening.
              Sometimes I’m reframing the problem, designing a new experience,
              prototyping something, experimenting with technology, or finding
              a better way to communicate what we’ve learned.
            </p>
            <p>Most often, I’m doing several of those things at once.</p>
            <p>
              Over the years, I’ve worked across developer experience,
              healthcare, sustainability, enterprise systems, emerging
              technology, and my own experiments. The industries change. The
              part I keep coming back to is the same: getting inside a difficult
              problem, connecting what others might not, and helping turn that
              understanding into something useful.
            </p>
          </div>

          <p className="mt-8 border-l-2 border-terracotta-500 pl-5 text-xl font-semibold leading-relaxed text-olive-800 sm:mt-10 sm:pl-6">
            Woven Logic Studio is the independent practice I built to work that
            way.
          </p>
        </div>
      </div>
    </section>
  )
}
