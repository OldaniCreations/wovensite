"use client"

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react"
import Image from "next/image"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import type { DotLottie } from "@lottiefiles/dotlottie-web"

/** Served from `/public` so dev/prod load same-origin (avoids extension/CORS fetch issues). */
const TREE_LOTTIE_SRC = "/woven-logic-tree.lottie"
const TREE_FALLBACK_SRC = "/woven-logic-tree.svg"

/** Idle time between plays (animation stays at normal speed). */
const PAUSE_BETWEEN_PLAYS_MS = 20_000

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

export default function TreeAnimation() {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  )
  const [dotLottie, setDotLottie] = useState<DotLottie | null>(null)
  const [hasFailed, setHasFailed] = useState(false)
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearPauseTimer = useCallback(() => {
    if (pauseTimerRef.current !== null) {
      clearTimeout(pauseTimerRef.current)
      pauseTimerRef.current = null
    }
  }, [])

  const showAnimation = !prefersReducedMotion && !hasFailed

  useEffect(() => {
    if (!dotLottie || !showAnimation) return

    const onLoadError = () => {
      setHasFailed(true)
    }

    const onComplete = () => {
      clearPauseTimer()
      pauseTimerRef.current = setTimeout(() => {
        pauseTimerRef.current = null
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          return
        }
        dotLottie.stop()
        dotLottie.play()
      }, PAUSE_BETWEEN_PLAYS_MS)
    }

    dotLottie.addEventListener("loadError", onLoadError)
    dotLottie.addEventListener("complete", onComplete)

    return () => {
      dotLottie.removeEventListener("loadError", onLoadError)
      dotLottie.removeEventListener("complete", onComplete)
      clearPauseTimer()
    }
  }, [dotLottie, showAnimation, clearPauseTimer])

  return (
    <div
      className="relative aspect-[802/761] w-full"
      aria-hidden="true"
    >
      {showAnimation ? (
        <DotLottieReact
          src={TREE_LOTTIE_SRC}
          loop={false}
          autoplay
          className="tree-lottie h-full w-full"
          dotLottieRefCallback={setDotLottie}
        />
      ) : (
        <Image
          src={TREE_FALLBACK_SRC}
          alt=""
          width={802}
          height={761}
          className="h-full w-full"
          sizes="(min-width: 1024px) 26rem, (min-width: 768px) 22rem, 16rem"
          unoptimized
          priority
        />
      )}
    </div>
  )
}
