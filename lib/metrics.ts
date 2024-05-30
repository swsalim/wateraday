import { ConversionMetricsConfig, Metric } from '@/types'

import { ConversionFactors, ConversionMetrics } from '@/config/metrics'

export function getMetricFromSlug(
  slug: string,
  metrics: ConversionMetricsConfig = ConversionMetrics
): Metric | null {
  const matchingItem = metrics.find((item) => item.slug === slug)
  return matchingItem ?? null
}

export function convertValue(
  value: number,
  fromSlug: string,
  toSlug: string
): string | null {
  const fromFactor = ConversionFactors[fromSlug]
  const toFactor = ConversionFactors[toSlug]

  if (fromFactor === undefined || toFactor === undefined) {
    // Invalid slug provided
    return null
  }

  // Convert the value to the base unit (liters), then to the desired unit
  const valueInBaseUnit = value * fromFactor
  const convertedValue = valueInBaseUnit / toFactor

  // Round the converted value to 4 decimal places
  const roundedValue = parseFloat(convertedValue.toFixed(4))

  // If the rounded value is very close to an integer, round it to the nearest integer
  if (Math.abs(roundedValue - Math.round(roundedValue)) < 0.0009) {
    return Math.round(roundedValue).toString()
  }

  return roundedValue.toString()
}

export function generateConversionData(startingSlug: string): {
  heading: string
  slug: string
  data: string[]
} {
  const data: string[] = ConversionMetrics.filter(
    (metric) => metric.slug !== startingSlug
  ) // Exclude the starting metric
    .map((metric) => {
      const convertedValue = convertValue(1, startingSlug, metric.slug)
      if (convertedValue !== null) {
        return `${convertedValue} ${getMetricFromSlug(metric.slug, ConversionMetrics)?.name}`
      }
      return ''
    })
    .filter((entry) => entry !== '') // Exclude empty entries in case of null conversions

  return {
    heading: `1 ${getMetricFromSlug(startingSlug, ConversionMetrics)?.name}`,
    slug: startingSlug,
    data,
  }
}

export function generateConversionRange(
  originalSlug: string,
  targetSlug: string
): { from: string; to: string }[] {
  const result: { from: string; to: string }[] = []

  for (let i = 1; i <= 50; i++) {
    const convertedValue = convertValue(i, originalSlug, targetSlug)
    if (convertedValue !== null) {
      const originalName =
        ConversionMetrics.find((metric) => metric.slug === originalSlug)
          ?.name || originalSlug
      const targetName =
        ConversionMetrics.find((metric) => metric.slug === targetSlug)?.name ||
        targetSlug
      result.push({
        from: `${i} ${originalName}`,
        to: `${convertedValue} ${targetName}`,
      })
    }
  }

  return result
}
