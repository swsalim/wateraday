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
import { Meteors } from '@/components/ui/Meteors'
import { Container } from '@/components/Container'
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
  params: { from: string; to: string }
}) {
  const { from, to } = params
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
  params: { from: string; to: string }
}) {
  const { from, to } = params
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
        url={absoluteUrl('/dehydration')}
      />
      <ArticleJsonLd
        description={config.description}
        title={config.title}
        cover={absoluteUrl(`/api/og?title=${config.title}`)}
        publishedAt="2022-04-22"
        reviewedBy="Admin"
      />
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
                      <Meteors number={10} />
                    </CardContent>
                  </Card>
                  <Card className="overflow-hidden">
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
                      <Meteors number={30} />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <Wrapper>
          <Container>
            <Prose className="mx-auto max-w-4xl text-center">
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
                <div className="rounded-lg bg-gray-100 px-12 py-10 shadow-md">
                  <code className="bg-transparent">
                    {targetMetricName}s = {originalMetricName}s ×{' '}
                    {parseFloat(getConversionFactor(from, to).toFixed(4))}
                  </code>
                </div>
              </div>

              <div>
                <h3>Example Calculation</h3>
                <p>
                  Let's convert 5 {originalMetricName}s to {targetMetricName}s:
                  5 × {parseFloat(getConversionFactor(from, to).toFixed(4))} ={' '}
                  {convertValue(5, from, to)} {targetMetricName}s
                </p>
              </div>
            </Prose>
          </Container>
        </Wrapper>
        <Wrapper className="px-0 md:px-6">
          <Container className="bg-gray-950 px-10 py-12 shadow-xl md:rounded-3xl md:px-16 md:py-20">
            <Prose theme="dark">
              <h2 className="mb-12 mt-0 text-center">
                {originalMetricName} to {targetMetricName} Conversion Table
              </h2>
              <div className="mx-auto mt-6 max-w-2xl">
                <TableConversionRange originalSlug={from} targetSlug={to} />
              </div>
            </Prose>
          </Container>
        </Wrapper>
        {/* <Wrapper>
        <Container>
          <Prose className="mx-auto max-w-4xl text-center">
            <Balancer as="h2" className="mt-0">
              More {originalMetricName} & {targetMetricName} Conversions
            </Balancer>
            <p>// TODO add copy</p>
          </Prose>
        </Container>
      </Wrapper> */}
      </div>
    </>
  )
}
