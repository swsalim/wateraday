import { ConversionMetricsConfig } from '@/types'

import { ConversionFactors, ConversionMetrics } from '@/config/metrics'

export function getMetricNameFromSlug(
  slug: string,
  metrics: ConversionMetricsConfig
): string | null {
  const matchingItem = metrics.find((item) => item.slug === slug)
  return matchingItem ? matchingItem.name : null
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
        return `${convertedValue} ${getMetricNameFromSlug(metric.slug, ConversionMetrics)}`
      }
      return ''
    })
    .filter((entry) => entry !== '') // Exclude empty entries in case of null conversions

  return {
    heading: `1 ${getMetricNameFromSlug(startingSlug, ConversionMetrics)}`,
    slug: startingSlug,
    data,
  }
}
