import EngagementCard from "@/components/EngagementCard"
import { engagements } from "@/data/home"

const CONTACT_EMAIL = "contact@wovenlogic.studio"

export default function EngagementModes() {
  return (
    <section aria-labelledby="engagement-heading" className="bg-cream">
      <div className="container py-20 md:py-28">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.7fr)] md:items-end">
          <div>
            <p className="tag mb-5">Ways into the work</p>
            <h2
              id="engagement-heading"
              className="max-w-3xl text-4xl leading-[1.08] tracking-[-0.035em] text-ink sm:text-5xl"
            >
              Explore. Prove. Transform. Embed.
            </h2>
          </div>
          <p className="max-w-lg text-lg leading-relaxed text-[var(--ink-soft)] md:justify-self-end">
            These are ways Woven can engage with a problem, not rigid packages
            or project categories.
          </p>
        </div>

        <div className="mt-16 grid gap-x-12 lg:grid-cols-2">
          {engagements.map((engagement, index) => (
            <EngagementCard
              key={engagement.name}
              {...engagement}
              index={index}
            />
          ))}
        </div>

        <div className="mt-6 flex justify-end border-t border-olive-800/20 pt-7">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-syne text-sm font-semibold text-olive-800 underline decoration-terracotta-400 decoration-2 underline-offset-8 hover:text-terracotta-600"
          >
            Tell me what you’re trying to solve <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
