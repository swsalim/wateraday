import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { ConversionMetrics } from '@/config/metrics'
import { siteConfig } from '@/config/site'
import { convertValue, getMetricFromSlug } from '@/lib/metrics'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card'
import { Meteors } from '@/components/ui/Meteors'
import { PageHeader } from '@/components/PageHeader'
import { Section } from '@/components/Section'
import { TableConversionRange } from '@/components/TableConversionRange'
import { VolumeConverterSimpleForm } from '@/components/VolumeConverterSimpleForm'

export const dynamicParams = false

const config = {
  title: 'Liquid Volume Converter',
  description:
    'Convert between barrels, cubic feet, gallons, liters, pints, tablespoons and other metric and imperial liquid volume units',
  url: '/volume-converter',
}

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  alternates: {
    canonical: config.url,
  },
  openGraph: {
    title: config.title,
    description: config.description,
    url: config.url,
    images: [
      {
        url: new URL(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/og?title=${config.title}`
        ),
        width: siteConfig.openGraph.width,
        height: siteConfig.openGraph.height,
        alt: siteConfig.openGraph.imageAlt,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: config.title,
    description: config.description,
    card: 'summary_large_image',
    creator: siteConfig.creator,
    images: [siteConfig.openGraph.image],
  },
}

export async function generateStaticParams({
  params: { from },
}: {
  params: { from: string }
}) {
  return ConversionMetrics.filter((metric) => metric.slug !== from).map(
    (metric) => ({
      slug: metric.slug,
    })
  )
}

export default async function LiterConversion({
  params,
}: {
  params: { from: string; to: string }
}) {
  const { from, to } = params
  console.log(from, to)
  const originalMetric = getMetricFromSlug(from, ConversionMetrics)
  const targetMetric = getMetricFromSlug(to, ConversionMetrics)
  console.log(originalMetric, targetMetric)

  if (!originalMetric || !targetMetric) {
    notFound()
  }

  const originalMetricName = originalMetric?.name
  const originalMetricDescription = originalMetric?.description
  const originalMetricAbbreviations = originalMetric?.abbreviations
  const targetMetricName = targetMetric?.name
  const targetMetricDescription = targetMetric?.description
  const targetMetricAbbreviations = targetMetric?.abbreviations

  return (
    <>
      <div className="container px-4 md:px-8">
        <div className="my-20">
          <PageHeader
            title={`Convert ${originalMetricName} to ${targetMetricName}`}
            intro={`Easily convert volume from ${originalMetricName} to ${targetMetricName} in seconds`}
            className="mx-auto text-center"
          />
          <div className="mx-auto my-0 mt-12 w-full max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid gap-8 lg:grid-cols-5">
                <div className="lg:col-span-3">
                  {/* TODO: Pass target slug to form */}
                  <VolumeConverterSimpleForm fromMetric={from} toMetric={to} />
                </div>
                <div className="grid gap-4 lg:col-span-2">
                  <Card className="overflow-hidden">
                    <CardHeader>
                      <CardTitle className="capitalize">
                        How Many {targetMetricName} Are in a{' '}
                        {originalMetricName}?
                      </CardTitle>
                      <CardDescription>
                        Multiply the volume by {convertValue(1, from, to)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="prose prose-p:mt-0">
                      <p>
                        1 {originalMetricName} ≈ {convertValue(1, from, to)}{' '}
                        {targetMetricName}
                      </p>

                      <Meteors number={20} />
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden">
                    <CardHeader>
                      <CardTitle className="capitalize">
                        {originalMetricName}
                      </CardTitle>
                      <CardDescription>
                        Abbreviation:{' '}
                        <span
                          className="my-0"
                          dangerouslySetInnerHTML={{
                            __html: originalMetricAbbreviations,
                          }}
                        ></span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="prose prose-p:mt-0">
                      {originalMetricDescription && (
                        <div
                          className="my-0"
                          dangerouslySetInnerHTML={{
                            __html: originalMetricDescription,
                          }}
                        ></div>
                      )}
                      <Meteors number={10} />
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden">
                    <CardHeader>
                      <CardTitle className="capitalize">
                        {targetMetricName}
                      </CardTitle>
                      <CardDescription>
                        Common abbreviations:{' '}
                        <span
                          className="my-0"
                          dangerouslySetInnerHTML={{
                            __html: targetMetricAbbreviations,
                          }}
                        ></span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="prose prose-p:mt-0">
                      {targetMetricDescription && (
                        <div
                          className="my-0"
                          dangerouslySetInnerHTML={{
                            __html: targetMetricDescription,
                          }}
                        ></div>
                      )}
                      <Meteors number={30} />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Section theme="dark">
        <h2 className="mb-12 mt-0 text-center">
          {originalMetricName} to {targetMetricName} Conversion Table
        </h2>
        <div className="mx-auto mt-6 max-w-2xl">
          <TableConversionRange originalSlug={from} targetSlug={to} />
        </div>
      </Section>
    </>
  )
}
