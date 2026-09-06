/* Hallmark · genre: editorial · macrostructure: Workbench · design-system: design.md · designed-as-app */
import { notFound } from 'next/navigation'
import { Metric } from '@/types'
import Balancer from 'react-wrap-balancer'

import { ConversionMetrics } from '@/config/metrics'
import { siteConfig } from '@/config/site'
import {
  convertValue,
  getConversionFactor,
  getMetricFromSlug,
} from '@/lib/metrics'
import { absoluteUrl } from '@/lib/utils'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card'
import { Container } from '@/components/Container'
import { WaterDrop3D } from '@/components/craft/WaterDrop3D'
import { WaveField } from '@/components/craft/WaveField'
import { PageHeader } from '@/components/PageHeader'
import { Prose } from '@/components/Prose'
import ArticleJsonLd from '@/components/StructuredData/ArticleJsonLd'
import WebsiteJsonLd from '@/components/StructuredData/WebsiteJsonLd'
import { TableConversionRange } from '@/components/TableConversionRange'
import { VolumeConverterSimpleForm } from '@/components/VolumeConverterSimpleForm'
import { Wrapper } from '@/components/Wrapper'

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ from: string; to: string }>
}) {
  const { from, to } = await params
  const originalMetric = getMetricFromSlug(from, ConversionMetrics)
  const targetMetric = getMetricFromSlug(to, ConversionMetrics)

  if (!originalMetric || !targetMetric) {
    notFound()
  }

  const originalMetricName = originalMetric?.name
  const targetMetricName = targetMetric?.name

  const config = {
    title: `Convert ${originalMetricName} to ${targetMetricName} in Seconds`,
    description: `Convert ${originalMetricName} to ${targetMetricName} with the volume conversion calculator, and learn the ${originalMetricName} to ${targetMetricName} formula.`,
    url: absoluteUrl(`/volume/${from}/${to}`),
  }

  return {
    title: `${config.title}`,
    description: config.description,
    openGraph: {
      title: config.title,
      description: config.description,
      images: [
        {
          url: new URL(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/og?title=${config.title}`
          ),
          width: siteConfig.openGraph.width,
          height: siteConfig.openGraph.height,
          alt: config.title,
        },
      ],
    },
    twitter: {
      title: config.title,
      description: config.description,
      card: 'summary_large_image',
      creator: siteConfig.creator,
      images: [siteConfig.openGraph.image],
    },
    alternates: {
      canonical: config.url,
    },
  }
}

export async function generateStaticParams() {
  const paths: { from: string; to: string }[] = []

  ConversionMetrics.forEach((fromMetric: Metric) => {
    ConversionMetrics.forEach((toMetric: Metric) => {
      if (fromMetric.slug !== toMetric.slug) {
        paths.push({
          from: fromMetric.slug,
          to: toMetric.slug,
        })
      }
    })
  })

  return paths
}

export default async function LiterConversion({
  params,
}: {
  params: Promise<{ from: string; to: string }>
}) {
  const { from, to } = await params
  const originalMetric = getMetricFromSlug(from, ConversionMetrics)
  const targetMetric = getMetricFromSlug(to, ConversionMetrics)

  if (!originalMetric || !targetMetric) {
    notFound()
  }

  const originalMetricName = originalMetric?.name
  const originalMetricDescription = originalMetric?.description
  const originalMetricAbbreviations = originalMetric?.abbreviations
  const targetMetricName = targetMetric?.name
  const targetMetricDescription = targetMetric?.description
  const targetMetricAbbreviations = targetMetric?.abbreviations

  const config = {
    title: `Convert ${originalMetricName} to ${targetMetricName} in Seconds`,
    description: `Convert ${originalMetricName} to ${targetMetricName} with the volume conversion calculator, and learn the ${originalMetricName} to ${targetMetricName} formula.`,
    url: absoluteUrl(`/volume/${from}/${to}`),
  }

  return (
    <>
      <WebsiteJsonLd
        company={siteConfig.siteName}
        url={absoluteUrl(`/volume/${from}/${to}`)}
      />
      <ArticleJsonLd
        description={config.description}
        title={config.title}
        cover={absoluteUrl(`/api/og?title=${config.title}`)}
        publishedAt="2022-04-22"
        reviewedBy="Admin"
      />
      <div className="relative overflow-hidden border-b border-rule bg-linear-to-b from-accent-soft/50 via-paper to-paper">
        <WaveField className="bottom-0 h-20 md:h-28" />
        <div className="relative mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
          <div className="mb-3 flex items-center gap-3">
            <p className="font-heading text-sm font-semibold tracking-tight text-accent">
              Volume tools
            </p>
            <WaterDrop3D size={28} animated={false} />
          </div>
          <PageHeader
            title={`Convert ${originalMetricName} to ${targetMetricName}`}
            intro={`Easily convert volume from ${originalMetricName} to ${targetMetricName} in seconds`}
            className="text-left"
          />
          <div className="mt-10 w-full min-w-0">
            <div className="grid gap-8 lg:grid-cols-5">
              <div className="min-w-0 lg:col-span-3">
                <VolumeConverterSimpleForm fromMetric={from} toMetric={to} />
              </div>
              <div className="grid min-w-0 gap-4 lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="capitalize">
                      How Many {targetMetricName} Are in a {originalMetricName}?
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
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="capitalize">
                      What is a {originalMetricName}?
                    </CardTitle>
                    {originalMetricAbbreviations && (
                      <CardDescription>
                        {originalMetricAbbreviations.split(', ').length > 1
                          ? 'Common Abbreviations: '
                          : 'Abbreviation: '}
                        <span
                          className="my-0"
                          dangerouslySetInnerHTML={{
                            __html: originalMetricAbbreviations,
                          }}
                        ></span>
                      </CardDescription>
                    )}
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
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="capitalize">
                      What is a {targetMetricName}?
                    </CardTitle>
                    {targetMetricAbbreviations && (
                      <CardDescription>
                        {targetMetricAbbreviations.split(', ').length > 1
                          ? 'Common Abbreviations: '
                          : 'Abbreviation: '}
                        <span
                          className="my-0"
                          dangerouslySetInnerHTML={{
                            __html: targetMetricAbbreviations,
                          }}
                        ></span>
                      </CardDescription>
                    )}
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
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-surface">
        <Wrapper>
          <Container>
            <Prose className="mx-auto max-w-3xl">
              <Balancer as="h2" className="mt-0">
                How to convert {originalMetricName} to {targetMetricName}
              </Balancer>

              <p>
                {originalMetricName}s and {originalMetricName}s are both units
                used to measure volume. The conversion between these units uses
                a standard conversion ratio of{' '}
                {parseFloat(getConversionFactor(from, to).toFixed(4))}{' '}
                {originalMetricName}s per {originalMetricName}.
              </p>

              <p>
                The value of 1 {originalMetricName} equals{' '}
                {parseFloat(getConversionFactor(from, to).toFixed(4))}{' '}
                {targetMetricName}s. To convert {originalMetricName}s to{' '}
                {targetMetricName}s, multiply the {originalMetricName} value by{' '}
                {parseFloat(getConversionFactor(from, to).toFixed(4))}.
              </p>

              <div>
                <h3>Conversion Formula</h3>
                <div className="border border-rule bg-paper-2 px-6 py-8 md:px-12">
                  <code className="bg-transparent text-ink">
                    {targetMetricName}s = {originalMetricName}s ×{' '}
                    {parseFloat(getConversionFactor(from, to).toFixed(4))}
                  </code>
                </div>
              </div>

              <div>
                <h3>Example Calculation</h3>
                <p>
                  Let&apos;s convert 5 {originalMetricName}s to{' '}
                  {targetMetricName}s: 5 ×{' '}
                  {parseFloat(getConversionFactor(from, to).toFixed(4))} ={' '}
                  {convertValue(5, from, to)} {targetMetricName}s
                </p>
              </div>
            </Prose>
          </Container>
        </Wrapper>
        <Wrapper className="border-t border-rule bg-band">
          <Container>
            <Prose theme="dark">
              <h2 className="mb-8 mt-0">
                {originalMetricName} to {targetMetricName} Conversion Table
              </h2>
              <div className="mx-auto mt-6 max-w-2xl min-w-0 overflow-x-auto">
                <TableConversionRange originalSlug={from} targetSlug={to} />
              </div>
            </Prose>
          </Container>
        </Wrapper>
      </div>
    </>
  )
}
