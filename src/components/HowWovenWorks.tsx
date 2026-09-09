import CapabilityList from "@/components/CapabilityList"

export default function HowWovenWorks() {
  return (
    <section
      aria-labelledby="how-woven-works-heading"
      className="bg-olive-800 text-sand-50"
    >
      <div className="container py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(16rem,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
          <div>
            <p className="mb-5 font-syne text-xs font-semibold uppercase tracking-[0.18em] text-terracotta-400">
              How Woven works
            </p>
            <h2
              id="how-woven-works-heading"
              className="max-w-lg text-4xl leading-[1.08] tracking-[-0.035em] text-sand-50 sm:text-5xl"
            >
              Different problems need different ways in.
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-2xl leading-relaxed text-sand-50">
              There isn’t a standard Woven process.
            </p>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-sand-100">
              <p>
                I might start by talking with the people closest to the problem,
                mapping how a system actually works, digging through data, or
                questioning the brief itself.
              </p>
              <p>
                From there, I might prototype something, design a new
                experience, experiment with AI or another technology, bring
                people together to work through the problem, or use storytelling
                to make what we’ve learned impossible to ignore.
              </p>
              <p className="font-semibold text-sand-50">
                Usually, it’s some combination.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          <CapabilityList />
        </div>

        <p className="ml-auto mt-10 max-w-3xl text-xl leading-relaxed text-sand-100 md:text-2xl">
          The mix changes with the problem. The goal doesn’t: understand what’s
          really happening, make possible solutions tangible, test what works,
          and turn it into something useful.
        </p>
      </div>
    </section>
  )
}
