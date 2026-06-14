import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://roboaihub.com'

  // Standard static routes
  const routes = [
    '',
    '/about',
    '/contact',
    '/career',
    '/ecosystem',
    '/events',
    '/projects',
    '/research-innovation',
    '/industrial-automation-systems',
    '/academic-institutional-development',
  ]

  const sitemapEntries = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return sitemapEntries
}
