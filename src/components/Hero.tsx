import TreeAnimation from "@/components/TreeAnimation"

const CONTACT_EMAIL = "contact@wovenlogic.studio"

export default function Hero() {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-10 lg:gap-14 xl:gap-16">
        <TreeAnimation />

        <div className="min-w-0 flex-1">
          <div className="max-w-3xl">
            <p
              style={{ fontFamily: "var(--font-syne)" }}
              className="text-sm font-medium text-teal-700 uppercase tracking-widest mb-4"
            >
              Woven Logic Studio
            </p>
            <h1
              style={{ fontFamily: "var(--font-syne)" }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              A design studio for complex systems
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
              We partner with teams at the intersection of product, research, and
              technology—turning ambiguity into clear, humane experiences.
            </p>
          </div>

          <div className="mt-16 md:mt-24 pt-12 border-t border-gray-200 max-w-3xl">
            <p
              style={{ fontFamily: "var(--font-syne)" }}
              className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-3"
            >
              Contact
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-xl md:text-2xl text-teal-700 hover:text-teal-800 font-medium underline-offset-4 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
