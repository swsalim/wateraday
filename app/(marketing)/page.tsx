import type { Metadata } from 'next'

import { siteConfig } from '@/config/site'

// export const revalidate = 60 // revalidate at most every minute
// export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: siteConfig.title,
}

export default async function Home() {

  return (
    <div className="w-full px-4 md:px-8">
      <h1 className="text-7xl">Test</h1>
    </div>
  )
}
