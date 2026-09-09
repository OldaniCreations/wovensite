import type { Engagement } from "@/data/home"

type EngagementCardProps = Engagement & {
  index: number
}

export default function EngagementCard({
  name,
  focus,
  situation,
  promise,
  detail,
  index,
}: EngagementCardProps) {
  return (
    <article className="flex flex-col border-t border-olive-800/35 py-7 md:py-9">
      <div className="flex items-baseline justify-between gap-6">
        <div className="flex items-baseline gap-3">
          <h3 className="text-3xl tracking-[-0.03em] text-ink">{name}</h3>
          <span className="font-syne text-xs font-semibold uppercase tracking-[0.14em] text-olive-600">
            {focus}
          </span>
        </div>
        <span
          aria-hidden="true"
          className="font-syne text-xs font-semibold tracking-[0.16em] text-terracotta-600"
        >
          0{index + 1}
        </span>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-[minmax(12rem,0.75fr)_minmax(0,1.25fr)]">
        <div>
          <p className="mb-5 text-xl leading-snug text-ink">“{situation}”</p>
          <p className="max-w-sm font-semibold leading-relaxed text-olive-700">
            {promise}
          </p>
        </div>
        <p className="max-w-xl text-base leading-relaxed text-[var(--ink-soft)]">
          {detail}
        </p>
      </div>
    </article>
  )
}
