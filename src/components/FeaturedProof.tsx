import ProofProjectCard from "@/components/ProofProjectCard"
import { proofProjects } from "@/data/home"

const projectLayouts = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-12",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
] as const

export default function FeaturedProof() {
  return (
    <section
      id="work"
      aria-labelledby="featured-proof-heading"
      className="scroll-mt-6 bg-sand-100/55"
    >
      <div className="container py-14 sm:py-16 md:py-24">
        <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.72fr)] md:items-end md:gap-8">
          <div>
            <p className="tag mb-5">Featured proof</p>
            <h2
              id="featured-proof-heading"
              className="max-w-3xl text-4xl leading-[1.08] tracking-[-0.035em] text-ink sm:text-5xl"
            >
              Problems I’ve gotten into.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-[var(--ink-soft)] md:justify-self-end">
            Different industries. Different technologies. Different
            constraints. The common thread is getting inside a difficult
            problem, finding a useful way through it, and making something real.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:mt-12 lg:grid-cols-12">
          {proofProjects.map((project, index) => (
            <ProofProjectCard
              key={project.title}
              {...project}
              index={index}
              className={projectLayouts[index]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
