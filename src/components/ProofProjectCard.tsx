import type { ProofProject } from "@/data/home"

type ProofProjectCardProps = ProofProject & {
  index: number
  className?: string
}

export default function ProofProjectCard({
  title,
  question,
  summary,
  proves,
  tags,
  outcome,
  emphasis,
  index,
  className = "",
}: ProofProjectCardProps) {
  const isPrimary = emphasis === "primary"

  return (
    <article
      className={`flex h-full flex-col border border-olive-800/20 bg-sand-50 ${
        isPrimary ? "p-7 sm:p-9" : "p-6 sm:p-7"
      } ${className}`}
    >
      <div className="flex items-start justify-between gap-5">
        <p className="font-syne text-xs font-semibold uppercase tracking-[0.16em] text-olive-700">
          {title}
        </p>
        <span
          aria-hidden="true"
          className="font-syne text-xs font-semibold tracking-[0.16em] text-terracotta-600"
        >
          0{index + 1}
        </span>
      </div>

      <h3
        className={`mt-8 max-w-3xl leading-[1.13] tracking-[-0.035em] text-ink ${
          isPrimary ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"
        }`}
      >
        {question}
      </h3>

      {outcome ? (
        <p className="mt-8 border-l-2 border-terracotta-500 pl-4 font-syne text-sm font-semibold text-olive-800">
          {outcome}
        </p>
      ) : null}

      <div className="mt-auto pt-12">
        <p className="leading-relaxed text-[var(--ink-soft)]">{summary}</p>

        <div className="mt-7 border-t border-olive-800/20 pt-6">
          <p className="mb-2 font-syne text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-terracotta-600">
            What this proves
          </p>
          <p className="leading-relaxed text-ink">{proves}</p>
        </div>

        <ul aria-label={`${title} capabilities`} className="mt-7 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-olive-800/20 px-3 py-1 font-syne text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-olive-700"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
