import ProblemCard from "@/components/ProblemCard"
import { engagements } from "@/data/home"

export default function ProblemRecognition() {
  return (
    <section
      aria-labelledby="problem-heading"
      className="border-y border-olive-800/20 bg-sand-50"
    >
      <div className="container py-14 sm:py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-end md:gap-16">
          <div>
            <p className="tag mb-4">Start where you are</p>
            <h2
              id="problem-heading"
              className="max-w-xl text-4xl leading-[1.08] tracking-[-0.035em] text-ink sm:text-5xl"
            >
              What are you trying to figure out?
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-relaxed text-[var(--ink-soft)] sm:text-xl">
            Start with the problem, not the role you think you need.
            <br />
            The problem tells us what to bring in.
          </p>
        </div>

        <ul className="mt-9 grid items-start gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
          {engagements.map((engagement) => (
            <ProblemCard key={engagement.name} {...engagement} />
          ))}
        </ul>
      </div>
    </section>
  )
}
