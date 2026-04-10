import { UseCase } from '@/types'
import ProjectCard from './ProjectCard'

interface ProjectGridProps {
  projects: UseCase[]
  title?: string
  subtitle?: string
}

export default function ProjectGrid({
  projects,
  title,
  subtitle,
}: ProjectGridProps) {
  return (
    <section className="py-16">
      {title && (
        <div className="mb-12">
          <h2 style={{ fontFamily: 'var(--font-syne)' }} className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </section>
  )
}
