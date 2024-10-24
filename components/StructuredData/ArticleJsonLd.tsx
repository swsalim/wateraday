import { absoluteUrl } from '@/lib/utils'

import JsonLd from './JsonLd'

export default function ArticleJsonLd({
  title,
  description,
  cover,
  publishedAt,
  reviewedBy,
}: {
  title: string
  description: string
  cover: string | string[]
  publishedAt: string
  reviewedBy: string
}) {
  const image = Array.isArray(cover) ? cover.join('') : cover

  return (
    <JsonLd id="article-jsonld">
      {{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: description,
        datePublished: publishedAt,
        dateModified: publishedAt,
        image,
        author: [
          {
            '@type': 'Person',
            name: reviewedBy,
          },
        ],
        publisher: {
          '@type': 'Organization',
          name: 'Water a Day',
          logo: {
            '@type': 'ImageObject',
            url: absoluteUrl('/images/logo.png'),
          },
        },
      }}
    </JsonLd>
  )
}
