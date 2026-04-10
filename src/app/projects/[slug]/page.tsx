import Image from 'next/image'
import Link from 'next/link'
import { client, urlFor } from '@/lib/sanity.client'
import { PROJECT_BY_SLUG_QUERY, ALL_PROJECT_SLUGS_QUERY } from '@/lib/sanity.queries'
import { UseCase } from '@/types'

interface PageProps {
  params: Promise<{ slug: string }>
}

export const revalidate = 3600 // Revalidate every hour

// Generate static parameters for all projects
export async function generateStaticParams() {
  const projects = await client.fetch(ALL_PROJECT_SLUGS_QUERY)
  return projects.map((project: any) => ({
    slug: project.slug.current,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const project = await client.fetch<UseCase>(PROJECT_BY_SLUG_QUERY, { slug })

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'This project could not be found.',
    }
  }

  return {
    title: `${project.title} — Elizabeth Oldani`,
    description: project.oneLiner,
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = await client.fetch<UseCase>(PROJECT_BY_SLUG_QUERY, { slug })

  if (!project) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-gray-600 mb-8">Sorry, we couldn't find the project you're looking for.</p>
        <Link href="/" className="text-teal-700 hover:text-teal-800 font-semibold">
          ← Back to all projects
        </Link>
      </div>
    )
  }

  const imageUrl = project.primaryThumbnail
    ? urlFor(project.primaryThumbnail).width(1200).height(800).url()
    : null

  return (
    <article className="container py-12 md:py-20">
      {/* Navigation */}
      <Link href="/" className="inline-flex items-center text-teal-700 hover:text-teal-800 mb-8 font-bold font-semibold">
        ← Back
      </Link>

      {/* Header */}
      <div className="mb-12">
        <div className="mb-4">
          <span className="tag">{project.portfolioCluster}</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl ">
          {project.oneLiner}
        </p>
      </div>

      {/* Image */}
      {imageUrl && (
        <div className="mb-16 rounded-lg overflow-hidden bg-gray-200 aspect-video">
          <Image
            src={imageUrl}
            alt={project.title}
            width={1200}
            height={800}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      )}

      {/* Content Grid */}
      <div className="grid md:grid-cols-3 gap-12 mb-16">
        {/* Main Content */}
        <div className="md:col-span-2">
          <div className="prose prose-lg max-w-none ">
            <h2 className="font-bold font-bold text-3xl mb-4 text-gray-900">Overview</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              {project.shortSummary}
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-[#faf8f3] rounded-lg p-6 space-y-6 sticky top-8">
            {project.timeline && (
              <div>
                <h3 className="font-bold font-bold text-sm uppercase text-gray-900 mb-2">
                  Timeline
                </h3>
                <p className="text-gray-600 ">{project.timeline}</p>
              </div>
            )}

            {project.portfolioTier && (
              <div>
                <h3 className="font-bold font-bold text-sm uppercase text-gray-900 mb-2">
                  Type
                </h3>
                <p className="text-gray-600  capitalize">{project.portfolioTier}</p>
              </div>
            )}

            {project.sourceRefs && project.sourceRefs.length > 0 && (
              <div>
                <h3 className="font-bold font-bold text-sm uppercase text-gray-900 mb-3">
                  Resources
                </h3>
                <div className="space-y-2">
                  {project.sourceRefs.map((ref) => (
                    <a
                      key={ref._key}
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-teal-700 hover:text-teal-800 text-sm  hover:underline"
                    >
                      {ref.label} →
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation to next project */}
      <div className="border-t border-gray-200 pt-8">
        <Link href="/" className="text-teal-700 hover:text-teal-800 font-bold font-semibold">
          ← Back to all projects
        </Link>
      </div>
    </article>
  )
}
