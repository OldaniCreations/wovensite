import Link from 'next/link'
import Image from 'next/image'
import { UseCase } from '@/types'
import { urlFor } from '@/lib/sanity.client'

interface ProjectCardProps {
  project: UseCase
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const imageUrl = project.primaryThumbnail
    ? urlFor(project.primaryThumbnail).width(600).height(400).url()
    : null

  return (
    <Link href={`/projects/${project.slug.current}`}>
      <div className="group cursor-pointer">
        <div className="relative overflow-hidden rounded-lg bg-gray-200 mb-4 aspect-video transition-transform duration-300 group-hover:scale-105">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-start justify-between gap-3">
            <h3 style={{ fontFamily: 'var(--font-syne)' }} className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-sm text-gray-600 line-clamp-2">
            {project.oneLiner}
          </p>

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs font-medium text-teal-700 uppercase tracking-wide">
              {project.portfolioCluster}
            </span>
            {project.timeline && (
              <span className="text-xs text-gray-500">{project.timeline}</span>
            )}
          </div>

          <div className="pt-2 border-t border-gray-200 group-hover:border-teal-700 transition-colors">
            <span style={{ fontFamily: 'var(--font-syne)' }} className="inline-block text-xs font-medium text-teal-700 group-hover:translate-x-1 transition-transform">
              View story →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
