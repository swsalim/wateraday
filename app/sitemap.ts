import type { MetadataRoute } from 'next'

import { ConversionMetrics } from '@/config/metrics'
import { siteConfig } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.origin

  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/dehydration',
    '/volume-converter',
  ].map((path) => ({
    url: `${baseUrl}${path || '/'}`,
    lastModified: new Date(),
  }))

  const volumeRoutes: MetadataRoute.Sitemap = []
  for (const fromMetric of ConversionMetrics) {
    for (const toMetric of ConversionMetrics) {
      if (fromMetric.slug === toMetric.slug) continue
      volumeRoutes.push({
        url: `${baseUrl}/volume/${fromMetric.slug}/${toMetric.slug}`,
        lastModified: new Date(),
      })
    }
  }

  return [...staticRoutes, ...volumeRoutes]
}
