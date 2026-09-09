import { problemSignals } from "@/data/home"

export default function ProblemRecognition() {
  return (
    <section
      aria-labelledby="problem-heading"
      className="border-y border-olive-800/20 bg-sand-50"
    >
      <div className="container grid gap-10 py-20 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-16 md:py-28">
        <div>
          <p className="tag mb-5">Start where you are</p>
          <h2
            id="problem-heading"
            className="max-w-xl text-4xl leading-[1.08] tracking-[-0.035em] text-ink sm:text-5xl"
          >
            What are you trying to figure out?
          </h2>
        </div>

        <div className="md:pt-9">
          <p className="max-w-2xl text-xl leading-relaxed text-[var(--ink-soft)] sm:text-2xl">
            You don’t need to know what kind of consultant, designer,
            researcher, or technologist you need. Start with the problem.
          </p>

          <ul className="mt-10 grid border-t border-olive-800/20 sm:grid-cols-2">
            {problemSignals.map((signal, index) => (
              <li
                key={signal}
                className="flex gap-4 border-b border-olive-800/20 py-5 pr-5 text-base leading-relaxed text-ink sm:odd:border-r sm:even:pl-6"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 font-syne text-xs font-semibold text-terracotta-600"
                >
                  0{index + 1}
                </span>
                {signal}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
