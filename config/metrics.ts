import { ConversionMetricsConfig } from '@/types'

export const ConversionMetrics: ConversionMetricsConfig = [
  {
    name: 'US liquid gallon',
    slug: 'us-liquid-gallon',
    abbreviations: 'gal, US gal',
    description:
      '<p>A U.S. gallon is a unit of volume equal to 128 U.S. fluid ounces, or about 3.785 liters. It should not be confused with the imperial gallon used in the United Kingdom.</p>',
  },
  {
    name: 'US liquid quart',
    slug: 'us-liquid-quart',
    abbreviations: 'qt',
    description:
      '<p>A U.S. quart is equal to 32 U.S. fluid ounces, 1/4<sup>th</sup> of a gallon, or 2 pints. It should not be confused with the Imperial quart, which is about 20% larger.</p>',
  },
  {
    name: 'US liquid pint',
    slug: 'us-liquid-pint',
    abbreviations: 'p, pt',
    description: `
      <p>
        A U.S. pint is equal to 16 U.S. fluid ounces, or 1/8<sup>th</sup> of a gallon.  It should not be confused with the Imperial pint, which is about 20% larger.<div class="mt-2">Common abbreviations: p, pt</div>
      </p>
    `,
  },
  {
    name: 'US legal cup',
    slug: 'us-legal-cup',
    abbreviations: 'cup',
    description:
      '<p>A U.S. cup is a unit of volume equal to 1/16th of a U.S. gallon, or about 236 milliliters.</p>',
  },
  {
    name: 'US fluid ounce',
    slug: 'us-fluid-ounce',
    abbreviations: 'fl oz, oz fl',
    description:
      '<p>A U.S. fluid ounce is 1/128<sup>th</sup> of a U.S. gallon. It is not the same as an ounce of weight or an Imperial fluid ounce.</p>',
  },
  {
    name: 'US tablespoon',
    slug: 'us-tablespoon',
    abbreviations: 'tbsp',
    description:
      '<p>A U.S. tablespoon is a unit of volume equal to 1/16<sup>th</sup> of a U.S. cup. There are 3 teaspoons in a tablespoon.</p>',
  },
  {
    name: 'US teaspoon',
    slug: 'us-teaspoon',
    abbreviations: 'tsp',
    description:
      '<p>A U.S. teaspoon is a unit of volume equal to 1/3<sup>rd</sup> of a tablespoon or 1/48<sup>th</sup> of a U.S. cup.</p>',
  },
  {
    name: 'Cubic meter',
    slug: 'cubic-meter',
    abbreviations: 'm<sup>3</sup>, m^3',
    description: `<p>A cubic meter, or cubic metre, is a unit of volume. It is the size of a cube that is 1 meter on a side. It is equal to exactly 1,000 liters.</p>`,
  },
  {
    name: 'Liter',
    slug: 'liter',
    abbreviations: 'L',
    description:
      '<p>A liter, or litre, is a unit of volume in the metric system. A liter is defined as the volume of a cube that is 10 centimeters on a side. There are about 3.785 liters in a U.S. gallon.</p>',
  },
  {
    name: 'Milliliter',
    slug: 'milliliter',
    abbreviations: 'mL',
    description:
      '<p>A milliliter is a unit of volume equal to 1/1000<sup>th</sup> of a liter. It is the same as a cubic centimeter.</p>',
  },
  {
    name: 'Imperial gallon',
    slug: 'imperial-gallon',
    abbreviations: 'imp gal',
    description:
      '<p>An Imperial gallon is a unit of volume sometimes used in the British commonwealth. It is exactly 4.54609 liters and is about 20% larger than a U.S. gallon.x</p>',
  },
  {
    name: 'Imperial quart',
    slug: 'imperial-quart',
    abbreviations: 'imp qt',
    description:
      '<p>An Imperial quart is equal to 40 Imperial fluid ounces, 1/4<sup>th</sup> of an Imperial gallon, or 2 Imperial pints. It should not be confused with the U.S. quart, which is about 20% smaller.</p>',
  },
  {
    name: 'Imperial pint',
    slug: 'imperial-pint',
    abbreviations: 'imp pt',
    description:
      '<p>An Imperial pint is 20 Imperial fluid ounces or 1/8th of an Imperial gallon. It is about 20% larger than a U.S. pint.</p>',
  },
  {
    name: 'Imperial cup',
    slug: 'imperial-cup',
    abbreviations: 'imp cup',
    description:
      '<p>An Imperial cup is a unit of volume equal to 1/16th of an Imperial gallon, or about 284 milliliters.</p>',
  },
  {
    name: 'Imperial fluid ounce',
    slug: 'imperial-fluid-ounce',
    abbreviations: 'imp fl oz, imp oz fl',
    description:
      '<p>An Imperial fluid ounce is 1/160<sup>th</sup> of an Imperial gallon. It is not the same as a fluid ounce of the U.S. system.</p>',
  },
  {
    name: 'Imperial tablespoon',
    slug: 'imperial-tablespoon',
    abbreviations: 'imp tbsp',
    description:
      '<p>An Imperial tablespoon is a unit of volume equal to 1/16<sup>th</sup> of an Imperial cup. There are about 2.4 teaspoons in an Imperial tablespoon.</p>',
  },
  {
    name: 'Imperial teaspoon',
    slug: 'imperial-teaspoon',
    abbreviations: 'imp tsp',
    description:
      '<p>An Imperial teaspoon is a unit of volume equal to 1/3<sup>rd</sup> of an Imperial tablespoon or 1/48<sup>th</sup> of an Imperial cup.</p>',
  },
  {
    name: 'Cubic foot',
    slug: 'cubic-foot',
    abbreviations: 'cu ft, ft<sup>3</sup>, ft^3',
    description:
      '<p>A cubic foot is a unit of volume. It is the size of a cube that is 1 foot on a side. It is about 7.5 gallons or about 28.3 liters.</p>',
  },
  {
    name: 'Cubic inch',
    slug: 'cubic-inch',
    abbreviations: 'cu in, in<sup>3</sup>, in^3',
    description:
      '<p>A cubic inch is a unit of volume. It is the size of a cube that is 1 inch on a side. It is approximately 1.1 tablespoons, or about 16.4 cubic centimeters.</p>',
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
