"use client"

import { useState } from "react"
import type { Engagement } from "@/data/home"

type ProblemCardProps = Engagement

function ProblemSignalGraphic({ name }: Pick<Engagement, "name">) {
  const sharedProps = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2,
    vectorEffect: "non-scaling-stroke" as const,
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 220 112"
      className="h-28 w-full overflow-visible"
    >
      {name === "Explore" ? (
        <>
          <g className="text-olive-600/35" {...sharedProps}>
            <path d="M8 24c33 0 31 62 68 49 33-12 9-51 52-47 27 3 25 31 48 31" />
            <path d="M8 88c30 0 34-48 67-43 32 5 18 40 55 40" />
            <path d="M21 54c24 0 31 26 58 24 29-2 33-27 58-27" />
          </g>
          <g className="text-terracotta-600" {...sharedProps}>
            <path d="M130 85c31 0 33-28 78-28" />
            <circle cx="208" cy="57" r="4" fill="currentColor" stroke="none" />
          </g>
        </>
      ) : null}

      {name === "Prove" ? (
        <>
          <g className="text-olive-600/35" {...sharedProps}>
            <path d="M9 20c45 0 53 36 101 36" />
            <path d="M9 56h101" />
            <path d="M9 92c45 0 53-36 101-36" />
            <circle cx="24" cy="20" r="5" />
            <circle cx="24" cy="56" r="5" />
            <circle cx="24" cy="92" r="5" />
          </g>
          <g className="text-terracotta-600" {...sharedProps}>
            <circle cx="114" cy="56" r="10" />
            <path d="m109 56 4 4 7-9M124 56h84" />
            <circle cx="208" cy="56" r="4" fill="currentColor" stroke="none" />
          </g>
        </>
      ) : null}

      {name === "Transform" ? (
        <>
          <g className="text-olive-600/35" {...sharedProps}>
            <rect x="10" y="18" width="42" height="30" rx="2" />
            <rect x="58" y="18" width="42" height="30" rx="2" />
            <rect x="10" y="54" width="42" height="30" rx="2" />
            <path d="M58 54h42v30H72" />
            <path d="m65 90-11-6 8-9" />
          </g>
          <g className="text-terracotta-600" {...sharedProps}>
            <path d="M113 56h22" />
            <path d="m129 49 7 7-7 7" />
            <rect x="148" y="28" width="62" height="56" rx="14" />
            <path d="M163 58h31M163 48h18M163 68h24" />
          </g>
        </>
      ) : null}

      {name === "Embed" ? (
        <>
          <g className="text-olive-600/35" {...sharedProps}>
            <circle cx="32" cy="34" r="8" />
            <circle cx="32" cy="78" r="8" />
            <circle cx="80" cy="56" r="8" />
            <path d="m39 37 34 16M39 75l34-16" />
            <circle cx="188" cy="34" r="8" />
            <circle cx="188" cy="78" r="8" />
            <path d="M147 56h29M181 41l-28 12M181 71l-28-12" />
          </g>
          <g className="text-terracotta-600" {...sharedProps}>
            <path d="M88 56h47" />
            <circle cx="143" cy="56" r="10" fill="currentColor" />
            <path d="m139 56 3 3 6-7" className="text-sand-50" />
          </g>
        </>
      ) : null}
    </svg>
  )
}

export default function ProblemCard({
  name,
  focus,
  situation,
  promise,
  couldInclude,
  youLeaveWith,
}: ProblemCardProps) {
  const [expanded, setExpanded] = useState(false)
  const headingId = `problem-${name.toLowerCase()}`
  const panelId = `${headingId}-details`
  const buttonId = `${headingId}-toggle`

  return (
    <li>
      <article
        aria-labelledby={headingId}
        className={`group/card relative flex flex-col overflow-hidden border p-5 transition-colors sm:p-6 ${
          expanded
            ? "border-olive-800/45 bg-sand-50"
            : "border-olive-800/25 bg-cream hover:border-olive-800/45"
        }`}
      >
        <p className="font-syne text-xs font-bold uppercase leading-snug tracking-[0.06em] text-terracotta-600 xl:text-sm">
          {name} · {focus}
        </p>

        <h3
          id={headingId}
          className="mt-6 min-h-[2lh] font-lora text-2xl font-semibold leading-snug text-balance text-ink xl:min-h-[3lh]"
        >
          {situation}
        </h3>

        <div className="mt-5 border-y border-olive-800/15 bg-sand-100/35 px-1 py-3 transition-colors group-hover/card:bg-sand-100/60">
          <ProblemSignalGraphic name={name} />
        </div>

        <p className="mt-4 min-h-[2lh] border-l-2 border-terracotta-500 pl-3 font-syne text-sm font-semibold leading-relaxed text-olive-800 xl:min-h-[3lh]">
          {promise}
        </p>

        <div
          id={panelId}
          hidden={!expanded}
          className="mt-5 space-y-4 border-t border-olive-800/20 pt-5"
        >
          <p className="leading-relaxed text-[var(--ink-soft)]">
            <span className="font-syne text-xs font-semibold uppercase tracking-[0.14em] text-olive-700">
              Could include{" "}
            </span>
            {couldInclude}
          </p>
          <p className="leading-relaxed text-[var(--ink-soft)]">
            <span className="font-syne text-xs font-semibold uppercase tracking-[0.14em] text-olive-700">
              You leave with{" "}
            </span>
            {youLeaveWith}
          </p>
        </div>

        <div className="mt-7 flex justify-end">
          <button
            type="button"
            id={buttonId}
            aria-expanded={expanded}
            aria-controls={panelId}
            onClick={() => setExpanded((open) => !open)}
            className="flex w-fit cursor-pointer items-center gap-2 rounded-sm font-syne text-sm font-semibold text-olive-800 hover:text-terracotta-600"
          >
            {expanded ? "View less" : "View more"}
            <span className="sr-only"> about {name}</span>
            <span
              aria-hidden="true"
              className={`inline-block text-terracotta-600 transition-transform ${
                expanded ? "rotate-180" : ""
              }`}
            >
              ↓
            </span>
          </button>
        </div>
      </article>
    </li>
  )
}
