export interface SourceRef {
  _key: string
  _type: 'sourceRef'
  label: string
  url: string
}

export interface UseCase {
  _id: string
  _type: 'useCase'
  _createdAt: string
  _updatedAt: string
  title: string
  slug: {
    _type: 'slug'
    current: string
  }
  oneLiner: string
  shortSummary: string
  portfolioCluster: string
  portfolioTier: 'anchor' | 'supporting'
  primaryThumbnail: {
    _type: 'image'
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  timeline?: string
  sourceRefs?: SourceRef[]
}

export interface ProjectsByCluster {
  cluster: string
  projects: UseCase[]
}
