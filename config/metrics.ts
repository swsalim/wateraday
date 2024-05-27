import { ConversionMetricsConfig } from '@/types'

export const ConversionMetrics: ConversionMetricsConfig = [
  {
    name: 'US liquid gallon',
    slug: 'us-liquid-gallon',
    symbol: 'gal',
  },
  {
    name: 'US liquid quart',
    slug: 'us-liquid-quart',
    symbol: '',
  },
  {
    name: 'US liquid pint',
    slug: 'us-liquid-pint',
    symbol: '',
  },
  {
    name: 'US legal cup',
    slug: 'us-legal-cup',
    symbol: '',
  },
  {
    name: 'US fluid ounce',
    slug: 'us-fluid-ounce',
    symbol: '',
  },
  {
    name: 'US tablespoon',
    slug: 'us-tablespoon',
    symbol: 'tbsp',
  },
  {
    name: 'US teaspoon',
    slug: 'us-teaspoon',
    symbol: 'tsp',
  },
  {
    name: 'Cubic meter',
    slug: 'cubic-meter',
    symbol: 'm3',
  },
  {
    name: 'Liter',
    slug: 'liter',
    symbol: 'L',
  },
  {
    name: 'Milliliter',
    slug: 'milliliter',
    symbol: '',
  },
  {
    name: 'Imperial gallon',
    slug: 'imperial-gallon',
    symbol: 'imp gal',
  },
  {
    name: 'Imperial quart',
    slug: 'imperial-quart',
    symbol: '',
  },
  {
    name: 'Imperial pint',
    slug: 'imperial-pint',
    symbol: '',
  },
  {
    name: 'Imperial cup',
    slug: 'imperial-cup',
    symbol: '',
  },
  {
    name: 'Imperial fluid ounce',
    slug: 'imperial-fluid-ounce',
    symbol: '',
  },
  {
    name: 'Imperial tablespoon',
    slug: 'imperial-tablespoon',
    symbol: '',
  },
  {
    name: 'Imperial teaspoon',
    slug: 'imperial-teaspoon',
    symbol: '',
  },
  {
    name: 'Cubic foot',
    slug: 'cubic-foot',
    symbol: '',
  },
  {
    name: 'Cubic inch',
    slug: 'cubic-inch',
    symbol: '',
  },
]

export const ConversionFactors: { [key: string]: number } = {
  'us-liquid-gallon': 3.78541,
  'us-liquid-quart': 0.946353,
  'us-liquid-pint': 0.473176,
  'us-legal-cup': 0.24,
  'us-fluid-ounce': 0.0295735,
  'us-tablespoon': 0.0147868,
  'us-teaspoon': 0.00492892,
  'cubic-meter': 1000,
  liter: 1,
  milliliter: 0.001,
  'imperial-gallon': 4.54609,
  'imperial-quart': 1.13652,
  'imperial-pint': 0.568261,
  'imperial-cup': 0.284131,
  'imperial-fluid-ounce': 0.0284131,
  'imperial-tablespoon': 0.0177582,
  'imperial-teaspoon': 0.00591939,
  'cubic-foot': 28.3168,
  'cubic-inch': 0.0163871,
}
