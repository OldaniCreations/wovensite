"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import type { DotLottie } from "@lottiefiles/dotlottie-web"

/** Same asset as the Lottie Host embed — direct .lottie URL for the player. */
const TREE_LOTTIE_SRC =
  "https://lottie.host/5a4a3424-b8b6-4203-a21e-8db98262c2db/o2ds0oxfIa.lottie"

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
    return () => clearPauseTimer()
  }, [clearPauseTimer])

  useEffect(() => {
    if (!dotLottie) return

    const onComplete = () => {
      clearPauseTimer()
      pauseTimerRef.current = setTimeout(() => {
        pauseTimerRef.current = null
        dotLottie.stop()
        dotLottie.play()
      }, PAUSE_BETWEEN_PLAYS_MS)
    }

    dotLottie.addEventListener("complete", onComplete)
    return () => {
      dotLottie.removeEventListener("complete", onComplete)
      clearPauseTimer()
    }
  }, [dotLottie, clearPauseTimer])

  return (
    <div
      className="w-full max-w-[min(100%,280px)] md:max-w-[320px] lg:max-w-[360px] mx-auto md:mx-0 aspect-[802/761]"
      aria-hidden="true"
    >
      <DotLottieReact
        src={TREE_LOTTIE_SRC}
        loop={false}
        autoplay
        className="h-full w-full"
        dotLottieRefCallback={setDotLottie}
      />
    </div>
  )
}
