import TreeAnimation from "@/components/TreeAnimation"

const CONTACT_EMAIL = "contact@wovenlogic.studio"

export default function Hero() {
  return (
    <section className="w-full">
      {/*
        Tree + copy sit in two grid columns on md+ so the text stack (eyebrow, h1, body)
        is one flex column with tight gaps — avoids the old grid where row height matched
        the tall Lottie and vertically centered the headline, creating huge gaps.
      */}
      <div
        className="
          flex w-full flex-col gap-4
          sm:grid sm:grid-cols-[auto,minmax(0,1fr)] sm:items-start sm:gap-x-8 sm:gap-y-0
          md:gap-x-10 lg:gap-x-12 xl:gap-x-14
        "
      >
        <div
          className="
            mx-auto w-full max-w-[min(100%,280px)] shrink-0
            sm:mx-0 sm:max-w-[280px] md:max-w-[300px] lg:max-w-[340px]
          "
        >
          <TreeAnimation />
        </div>

        <div className="flex min-w-0 flex-col gap-1 md:min-w-0">
          <p
            style={{ fontFamily: "var(--font-syne)" }}
            className="text-sm font-medium uppercase leading-none tracking-[0.2em] text-teal-700"
          >
            Woven Logic Studio
          </p>

          <h1
            style={{ fontFamily: "var(--font-syne)" }}
            className="max-w-3xl text-balance text-5xl font-bold leading-[1.06] tracking-tight text-gray-900 md:text-6xl"
          >
            A design studio for complex systems
          </h1>

          <p className="max-w-3xl text-xl leading-snug text-gray-600 md:text-2xl md:leading-relaxed">
            We partner with teams at the intersection of product, research, and
            technology—turning ambiguity into clear, humane experiences.
          </p>

          <div className="mt-5 border-t border-gray-200/90 pt-4 md:mt-6 md:pt-5">
            <p
              style={{ fontFamily: "var(--font-syne)" }}
              className="mb-2 text-sm font-medium uppercase tracking-widest text-gray-500"
            >
              Contact
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-xl font-medium text-teal-700 underline-offset-4 transition-colors hover:text-teal-800 hover:underline md:text-2xl"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
