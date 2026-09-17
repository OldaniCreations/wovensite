"use client"

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react"

const STATEMENTS = [
  "Understand what’s happening.",
  "Make possibilities tangible.",
  "Test what works.",
  "Turn it into something useful.",
] as const

const PLAY_MS = 7600

const PATH = {
  creamUpper:
    "M40 168 C110 168 142 44 260 44 C360 44 402 176 508 90 C582 28 702 72 784 168 C844 168 910 168 960 168",
  sageMid:
    "M40 168 C132 168 196 208 308 168 C424 124 476 232 608 170 C708 124 804 188 960 168",
  creamLower:
    "M40 168 C110 168 142 292 260 292 C360 292 402 144 508 246 C582 308 702 264 784 168 C844 168 910 168 960 168",
  sageCross:
    "M40 168 C168 168 214 64 318 108 C430 154 356 286 508 214 C628 152 668 286 776 176 C844 128 910 168 960 168",
  loop: "M620 58 C642 8 756 14 746 82 C734 142 586 138 620 58",
  active:
    "M40 168 C110 168 142 44 260 44 C360 44 402 176 508 90 C540 52 588 50 620 58 C642 8 756 14 746 82 C734 142 586 138 620 58 C702 78 798 168 884 168 C918 168 940 168 960 168",
} as const

type PlayState = "idle" | "playing" | "complete"

function subscribeReducedMotion(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)")
  media.addEventListener("change", onStoreChange)
  return () => media.removeEventListener("change", onStoreChange)
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function getReducedMotionServerSnapshot() {
  return false
}

type ProcessAnimationProps = {
  className?: string
}

export default function ProcessAnimation({ className = "" }: ProcessAnimationProps) {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  )
  const rootRef = useRef<HTMLDivElement | null>(null)
  const hasAutoPlayedRef = useRef(false)
  const [playId, setPlayId] = useState(0)
  const [state, setState] = useState<PlayState>("idle")

  const visualState: PlayState = prefersReducedMotion ? "complete" : state
  const canReplay = visualState === "complete" && !prefersReducedMotion

  const startPlaying = useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setState("complete")
      return
    }
    setPlayId((current) => current + 1)
    setState("playing")
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) return

    const node = rootRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAutoPlayedRef.current) return
        hasAutoPlayedRef.current = true
        startPlaying()
        observer.disconnect()
      },
      { threshold: 0.32, rootMargin: "0px 0px -12% 0px" }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [prefersReducedMotion, startPlaying])

  useEffect(() => {
    if (state !== "playing") return

    const timeout = window.setTimeout(() => {
      setState("complete")
    }, PLAY_MS)

    return () => window.clearTimeout(timeout)
  }, [state, playId])

  return (
    <div ref={rootRef} className={`process-anim ${className}`.trim()}>
      <p className="sr-only">
        A problem enters, branches into possible paths, weaves and iterates,
        then converges into a useful result.
      </p>

      <div className="relative">
        {canReplay ? (
          <button
            type="button"
            onClick={startPlaying}
            aria-label="Replay animation"
            className="absolute right-0 bottom-1 z-10 rounded-full p-2 text-terracotta-400 transition-colors hover:text-sand-50"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.2 10.2A7 7 0 1 1 7 16.8M5.2 6.4v3.8H9"
              />
            </svg>
          </button>
        ) : null}

        <svg
          key={playId}
          aria-hidden="true"
          viewBox="0 0 1000 320"
          className="process-anim-svg h-auto w-full overflow-visible"
          data-state={visualState}
        >
          <g
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="process-sage"
          >
            <path
              className="process-draw"
              d={PATH.sageMid}
              pathLength={1}
              stroke="currentColor"
              strokeWidth="1.7"
              style={{
                ["--process-delay" as string]: "0.85s",
                ["--process-duration" as string]: "2.35s",
              }}
            />
            <path
              className="process-draw"
              d={PATH.sageCross}
              pathLength={1}
              stroke="currentColor"
              strokeWidth="1.55"
              style={{
                ["--process-delay" as string]: "2.15s",
                ["--process-duration" as string]: "2.1s",
              }}
            />
          </g>

          <g
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-sand-50/45"
          >
            <path
              className="process-draw"
              d={PATH.creamUpper}
              pathLength={1}
              stroke="currentColor"
              strokeWidth="1.7"
              style={{
                ["--process-delay" as string]: "0.55s",
                ["--process-duration" as string]: "2.4s",
              }}
            />
            <path
              className="process-draw"
              d={PATH.creamLower}
              pathLength={1}
              stroke="currentColor"
              strokeWidth="1.7"
              style={{
                ["--process-delay" as string]: "0.7s",
                ["--process-duration" as string]: "2.4s",
              }}
            />
            <path
              className="process-draw"
              d={PATH.loop}
              pathLength={1}
              stroke="currentColor"
              strokeWidth="1.55"
              style={{
                ["--process-delay" as string]: "3.35s",
                ["--process-duration" as string]: "1.55s",
              }}
            />
          </g>

          <g
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-terracotta-400"
          >
            <path
              className="process-draw"
              d={PATH.active}
              pathLength={1}
              stroke="currentColor"
              strokeWidth="6.5"
              opacity="0.16"
              style={{
                ["--process-delay" as string]: "3.7s",
                ["--process-duration" as string]: "3.1s",
              }}
            />
            <path
              className="process-draw"
              d={PATH.active}
              pathLength={1}
              stroke="currentColor"
              strokeWidth="2.35"
              style={{
                ["--process-delay" as string]: "3.7s",
                ["--process-duration" as string]: "3.1s",
              }}
            />
          </g>

          <circle
            className="process-pulse text-terracotta-400"
            r="4.5"
            fill="currentColor"
            style={{ offsetPath: `path("${PATH.active}")` }}
          />

          <g className="text-sand-50/80">
            <circle
              className="process-node"
              cx="155"
              cy="168"
              r="3.4"
              fill="currentColor"
              style={{ ["--process-delay" as string]: "0.7s" }}
            />
            <circle
              className="process-node"
              cx="260"
              cy="44"
              r="3.4"
              fill="currentColor"
              style={{ ["--process-delay" as string]: "1.35s" }}
            />
            <circle
              className="process-node"
              cx="260"
              cy="292"
              r="3.4"
              fill="currentColor"
              style={{ ["--process-delay" as string]: "1.5s" }}
            />
            <circle
              className="process-node"
              cx="508"
              cy="214"
              r="3.2"
              fill="currentColor"
              style={{ ["--process-delay" as string]: "2.7s" }}
            />
            <circle
              className="process-node"
              cx="620"
              cy="58"
              r="3.5"
              fill="currentColor"
              style={{ ["--process-delay" as string]: "3.55s" }}
            />
            <circle
              className="process-node"
              cx="784"
              cy="168"
              r="3.4"
              fill="currentColor"
              style={{ ["--process-delay" as string]: "6.35s" }}
            />
          </g>

          <g className="text-sand-50">
            <circle
              className="process-node"
              cx="40"
              cy="168"
              r="8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              style={{ ["--process-delay" as string]: "0s" }}
            />
            <circle
              className="process-node"
              cx="40"
              cy="168"
              r="3"
              fill="currentColor"
              style={{ ["--process-delay" as string]: "0.18s" }}
            />
          </g>

          <g className="text-terracotta-400">
            <circle
              className="process-node"
              cx="960"
              cy="168"
              r="8.5"
              fill="currentColor"
              style={{ ["--process-delay" as string]: "6.55s" }}
            />
            <circle
              className="process-node text-olive-800"
              cx="960"
              cy="168"
              r="3"
              fill="currentColor"
              style={{ ["--process-delay" as string]: "6.7s" }}
            />
          </g>
        </svg>
      </div>

      <ol
        aria-label="How Woven works"
        className="mt-8 grid list-none gap-3 border-t border-sand-200/25 p-0 pt-6 sm:mt-10 sm:grid-cols-2 sm:pt-8 lg:grid-cols-4 lg:gap-6"
      >
        {STATEMENTS.map((statement, index) => (
          <li
            key={statement}
            className="max-w-xs font-syne text-sm font-semibold leading-snug text-sand-50 sm:text-base"
          >
            <span className="mb-1 block font-syne text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-terracotta-400">
              {String(index + 1).padStart(2, "0")}
            </span>
            {statement}
          </li>
        ))}
      </ol>
    </div>
  )
}
