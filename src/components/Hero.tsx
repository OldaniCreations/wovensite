import TreeAnimation from "@/components/TreeAnimation"

const CONTACT_EMAIL = "contact@wovenlogic.studio"

export default function Hero() {
  return (
    <section className="w-full">
      {/* Mobile: tree, then eyebrow, headline, body, contact. Desktop: eyebrow top-right; tree + h1 share one row. */}
      <div
        className="
          grid w-full grid-cols-1 gap-y-10
          md:grid-cols-[auto,minmax(0,1fr)]
          md:gap-x-10 md:gap-y-6 lg:gap-x-14 xl:gap-x-16
        "
      >
        <div
          className="
            col-start-1 row-start-1 justify-self-center
            w-full max-w-[min(100%,280px)] md:max-w-[320px] lg:max-w-[360px]
            md:col-start-1 md:row-start-2 md:justify-self-start md:self-center
          "
        >
          <TreeAnimation />
        </div>

        <p
          style={{ fontFamily: "var(--font-syne)" }}
          className="
            col-start-1 row-start-2
            text-sm font-medium text-teal-700 uppercase tracking-widest
            md:col-start-2 md:row-start-1
          "
        >
          Woven Logic Studio
        </p>

        <h1
          style={{ fontFamily: "var(--font-syne)" }}
          className="
            col-start-1 row-start-3
            max-w-3xl text-5xl font-bold leading-tight text-gray-900 md:text-6xl
            md:col-start-2 md:row-start-2 md:self-center
          "
        >
          A design studio for complex systems
        </h1>

        <p className="col-start-1 row-start-4 max-w-3xl text-xl leading-relaxed text-gray-600 md:col-start-2 md:row-start-3 md:text-2xl">
          We partner with teams at the intersection of product, research, and
          technology—turning ambiguity into clear, humane experiences.
        </p>

        <div className="col-start-1 row-start-5 max-w-3xl md:col-start-2 md:row-start-4">
          <div className="mt-16 border-t border-gray-200 pt-12 md:mt-12">
            <p
              style={{ fontFamily: "var(--font-syne)" }}
              className="mb-3 text-sm font-medium uppercase tracking-widest text-gray-500"
            >
              Contact
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-xl font-medium text-teal-700 underline-offset-4 hover:text-teal-800 hover:underline md:text-2xl"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
