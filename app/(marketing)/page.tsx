import type { Metadata } from 'next'

import { siteConfig } from '@/config/site'
import { getProducts } from '@/lib/airtable'
import { ProductGrid } from '@/components/ProductGrid'

export const revalidate = 60 // revalidate at most every minute
// export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: siteConfig.title,
}

export default async function Home() {
  const products = await getProducts()
  console.log(`# of products: ${products.length}`)

  return (
    <div className="w-full px-4 md:px-8">
      <ProductGrid products={products} />
    </div>
  )
}
