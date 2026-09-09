export default function AboutIntro() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-cream scroll-mt-6"
    >
      <div className="container grid gap-12 py-20 md:py-28 lg:grid-cols-[minmax(15rem,0.62fr)_minmax(0,1.38fr)] lg:gap-20">
        <div>
          <p className="tag mb-5">About Tristin</p>
          <h2
            id="about-heading"
            className="text-5xl leading-none tracking-[-0.045em] text-ink sm:text-6xl"
          >
            I’m Tristin.
          </h2>
        </div>

        <div className="max-w-3xl">
          <p className="text-2xl leading-relaxed text-ink">
            I’ve spent my career working on problems that rarely fit neatly
            inside one role.
          </p>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-[var(--ink-soft)]">
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

          <p className="mt-10 border-l-2 border-terracotta-500 pl-6 text-xl font-semibold leading-relaxed text-olive-800">
            Woven Logic Studio is the independent practice I built to work that
            way.
          </p>
        </div>
      </div>
    </section>
  )
}
