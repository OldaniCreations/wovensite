import { client } from '@/lib/sanity.client'
import { FEATURED_PROJECTS_QUERY } from '@/lib/sanity.queries'
import Hero from '@/components/Hero'
import ProjectGrid from '@/components/ProjectGrid'
import { UseCase } from '@/types'

export const revalidate = 3600 // Revalidate every hour

export default async function Home() {
  const projects = await client.fetch<UseCase[]>(FEATURED_PROJECTS_QUERY)

  return (
    <main className="container py-12 md:py-20">
      <Hero />
      <ProjectGrid projects={projects} />
    </main>
  )
}
