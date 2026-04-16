import { Metadata } from "next"
import Hero from "@/components/Hero"

export const metadata: Metadata = {
  title: "Woven Logic Studio",
  description:
    "A design studio for complex systems—product, research, and technology.",
}

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center px-4 py-10 sm:px-6 md:py-12 lg:px-8">
      <div className="w-full max-w-7xl">
        <Hero />
      </div>
    </main>
  )
}
