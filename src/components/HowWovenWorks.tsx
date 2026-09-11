import ProcessAnimation from "@/components/ProcessAnimation"

export default function HowWovenWorks() {
  return (
    <section
      aria-labelledby="how-woven-works-heading"
      className="bg-olive-800 text-sand-50"
    >
      <div className="container py-14 sm:py-16 md:py-20">
        <div className="grid gap-7 lg:grid-cols-[minmax(16rem,0.7fr)_minmax(0,1.3fr)] lg:items-end lg:gap-20">
          <div>
            <p className="mb-5 font-syne text-xs font-semibold uppercase tracking-[0.18em] text-terracotta-400">
              How Woven works
            </p>
            <h2
              id="how-woven-works-heading"
              className="max-w-lg text-4xl leading-[1.08] tracking-[-0.035em] text-sand-50 sm:text-5xl"
            >
              Every problem gets its own way in.
            </h2>
          </div>

          <p className="max-w-3xl text-xl leading-relaxed text-sand-50 sm:text-2xl">
            I start by understanding what’s really happening. Then I make
            possibilities tangible, test what works, and turn it into something
            useful.
          </p>
        </div>

        <div className="mt-8 md:mt-10">
          <ProcessAnimation />
        </div>
      </div>
    </section>
  )
}
