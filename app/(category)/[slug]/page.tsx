import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PageItem } from '@/types'

import { pagesConfig } from '@/config/pages'
import { siteConfig } from '@/config/site'
import { getProductsBySlug } from '@/lib/airtable'
import { Heading } from '@/components/Heading'
import { ProductGrid } from '@/components/ProductGrid'

export const revalidate = 300 // revalidate at most every minute
export const dynamicParams = false // returns 404

export const metadata: Metadata = {
  title: siteConfig.title,
}

export async function generateStaticParams() {
  if (!pagesConfig.pages) notFound()

  return pagesConfig.pages.filter(page => page?.published).map((page) => ({
    slug: page?.slug,
  }))
}

export default async function Category({
  params,
}: {
  params: { slug: string }
}) {
  const pageData: PageItem = pagesConfig.pages?.find(
    (page) => page?.slug === params.slug
  )
  console.log('>> pageData')
  console.log(pageData)

  if (!pageData) notFound()

  const filteredProducts = await getProductsBySlug(
    pageData.category,
    pageData.age,
    pageData.tags
  )

  console.log(`# of filteredProducts: ${filteredProducts.length}`)

  return (
    <div className="w-full px-4 md:px-8">
      <Heading title={pageData.title} />
      <div
        className="mx-auto mb-8 md:max-w-4xl"
        dangerouslySetInnerHTML={{ __html: pageData.content }}
      />
      <ProductGrid products={filteredProducts} />
    </div>
  )
}
