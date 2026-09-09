"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import type { DotLottie } from "@lottiefiles/dotlottie-web"

/** Served from `/public` so dev/prod load same-origin (avoids extension/CORS fetch issues). */
const TREE_LOTTIE_SRC = "/woven-logic-tree.lottie"

/** Idle time between plays (animation stays at normal speed). */
const PAUSE_BETWEEN_PLAYS_MS = 20_000

export default function TreeAnimation() {
  const [dotLottie, setDotLottie] = useState<DotLottie | null>(null)
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearPauseTimer = useCallback(() => {
    if (pauseTimerRef.current !== null) {
      clearTimeout(pauseTimerRef.current)
      pauseTimerRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!dotLottie) return

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    )

    const applyMotionPreference = () => {
      clearPauseTimer()

      if (motionPreference.matches) {
        dotLottie.unfreeze()
        dotLottie.stop()
        dotLottie.setFrame(0)
        dotLottie.freeze()
        return
      }

      dotLottie.unfreeze()
      dotLottie.play()
    }

    const onComplete = () => {
      if (motionPreference.matches) return

      clearPauseTimer()
      pauseTimerRef.current = setTimeout(() => {
        pauseTimerRef.current = null
        if (motionPreference.matches) return
        dotLottie.stop()
        dotLottie.play()
      }, PAUSE_BETWEEN_PLAYS_MS)
    }

    motionPreference.addEventListener("change", applyMotionPreference)
    dotLottie.addEventListener("ready", applyMotionPreference)
    dotLottie.addEventListener("complete", onComplete)
    applyMotionPreference()

    return () => {
      motionPreference.removeEventListener("change", applyMotionPreference)
      dotLottie.removeEventListener("ready", applyMotionPreference)
      dotLottie.removeEventListener("complete", onComplete)
      clearPauseTimer()
    }
  }, [dotLottie, clearPauseTimer])

  return (
    <div
      className="aspect-[802/761] w-full"
      aria-hidden="true"
    >
      <DotLottieReact
        src={TREE_LOTTIE_SRC}
        loop={false}
        autoplay={false}
        className="h-full w-full"
        dotLottieRefCallback={setDotLottie}
      />
    </div>
  )
}
