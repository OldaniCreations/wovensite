import { groq } from 'next-sanity'

// Get all projects grouped by portfolio cluster
export const PROJECTS_BY_CLUSTER_QUERY = groq`
  *[_type == "useCase"] | group(portfolioCluster) {
    cluster: key,
    projects: .[] | sort(portfolioTier == "anchor" desc) {
      _id,
      title,
      slug,
      oneLiner,
      shortSummary,
      primaryThumbnail,
      portfolioCluster,
      portfolioTier,
      timeline,
      sourceRefs
    }
  }
`

// Get featured anchor projects for homepage
export const FEATURED_PROJECTS_QUERY = groq`
  *[_type == "useCase" && portfolioTier == "anchor"] | order(_createdAt desc)[0...4] {
    _id,
    title,
    slug,
    oneLiner,
    primaryThumbnail,
    portfolioCluster,
    timeline
  }
`

// Get single project by slug
export const PROJECT_BY_SLUG_QUERY = groq`
  *[_type == "useCase" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    oneLiner,
    shortSummary,
    portfolioCluster,
    portfolioTier,
    primaryThumbnail,
    timeline,
    sourceRefs
  }
`

// Get all project slugs for static generation
export const ALL_PROJECT_SLUGS_QUERY = groq`
  *[_type == "useCase"] {
    slug
  }
`

// Get all projects (for sitemap, etc)
export const ALL_PROJECTS_QUERY = groq`
  *[_type == "useCase"] | sort(_createdAt desc) {
    _id,
    title,
    slug,
    oneLiner,
    primaryThumbnail,
    portfolioCluster,
    portfolioTier
  }
`
