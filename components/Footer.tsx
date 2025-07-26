import Link from 'next/link'

const footerLinks = [
  {
    name: 'liters to gallons',
    href: '/volume/liter/us-liquid-gallon',
  },
  {
    name: 'gallons to liters',
    href: '/volume/us-liquid-gallon/liter',
  },
  {
    name: 'ml to cups',
    href: '/volume/milliliter/us-legal-cup',
  },
  { name: 'cups to ml', href: '/volume/us-legal-cup/milliliter' },
  { name: 'tablespoons to cups', href: '/volume/us-tablespoon/us-legal-cup' },
  { name: 'cups to tablespoons', href: '/volume/us-legal-cup/us-tablespoon' },
  {
    name: 'ml to l',
    href: '/volume/milliliter/liter',
  },
  { name: 'l to ml', href: '/volume/liter/milliliter' },
  { name: 'teaspoon to ml', href: '/volume/us-teaspoon/milliliter' },
  {
    name: 'ml to teaspoon',
    href: '/volume/milliliter/us-teaspoon',
  },
  {
    name: 'liters to quarts',
    href: '/volume/liter/us-liquid-quart',
  },
  { name: 'quarts to liters', href: '/volume/us-liquid-quart/liter' },
  { name: 'cups to liters', href: '/volume/us-legal-cup/liter' },
  {
    name: 'liters to cups',
    href: '/volume/liter/us-legal-cup',
  },
  { name: 'pint to ml', href: '/volume/us-liquid-pint/milliliter' },
  {
    name: 'ml to pint',
    href: '/volume/milliliter/us-liquid-pint',
  },
  {
    name: 'cubic feet to gallons',
    href: '/volume/cubic-foot/us-liquid-gallon',
  },
  {
    name: 'gallons to cubic feet',
    href: '/volume/us-liquid-gallon/cubic-foot',
  },
  {
    name: 'cubic inches to gallons',
    href: '/volume/cubic-inch/us-liquid-gallon',
  },
  {
    name: 'gallons to cubic inches',
    href: '/volume/us-liquid-gallon/cubic-inch',
  },
  { name: 'cubic inches to liters', href: '/volume/cubic-inch/liter' },
  {
    name: 'liters to cubic inches',
    href: '/volume/liter/cubic-inch',
  },
  { name: 'cups to quart', href: '/volume/us-legal-cup/us-liquid-quart' },
  { name: 'quart to cups', href: '/volume/us-liquid-quart/us-legal-cup' },
  { name: 'cups to gallons', href: '/volume/us-legal-cup/us-liquid-gallon' },
  { name: 'gallons to cups', href: '/volume/us-liquid-gallon/us-legal-cup' },
  { name: 'pint to cups', href: '/volume/us-liquid-pint/us-legal-cup' },
  { name: 'cups to pint', href: '/volume/us-legal-cup/us-liquid-pint' },
  {
    name: 'quart to gallons',
    href: '/volume/us-liquid-quart/us-liquid-gallon',
  },
  {
    name: 'gallons to quart',
    href: '/volume/us-liquid-gallon/us-liquid-quart',
  },
  { name: 'gallons to ml', href: '/volume/us-liquid-gallon/milliliter' },
  { name: 'ml to gallons', href: '/volume/milliliter/us-liquid-gallon' },
  { name: 'liter to ounces', href: '/volume/liter/us-fluid-ounce' },
  { name: 'ounces to liter', href: '/volume/us-fluid-ounce/liter' },
  { name: 'pints to liters', href: '/volume/us-liquid-pint/liter' },
  {
    name: 'liters to pints',
    href: '/volume/liter/us-liquid-pint',
  },
  { name: 'pints to gallons', href: '/volume/us-liquid-pint/us-liquid-gallon' },
  { name: 'gallons to pints', href: '/volume/us-liquid-gallon/us-liquid-pint' },
]

type Project = {
  url: string
  name: string
  target: '_blank' | '_self'
}
const projects: Project[] = [
  {
    url: 'https://pfpresizer.com/?ref=wateraday.com',
    name: 'PFP Resizer',
    target: '_blank',
  },
  {
    url: 'https://www.flipanimage.xyz/?ref=wateraday.com',
    name: 'Flip Image',
    target: '_blank',
  },
  {
    url: 'https://www.cmyktopantone.com/?ref=wateraday.com',
    name: 'CMYK to Pantone',
    target: '_blank',
  },
  {
    url: 'https://www.rgbtopantone.com/?ref=wateraday.com',
    name: 'RGB to Pantone',
    target: '_blank',
  },
  {
    url: 'https://www.randomnumberapp.com/?ref=wateraday.com',
    name: 'Random Number App',
    target: '_blank',
  },
  {
    url: 'https://www.clinicgeek.com/?ref=wateraday.com',
    name: 'Clinic Geek',
    target: '_blank',
  },
  {
    url: 'https://www.cottagefortots.com/?ref=wateraday.com',
    name: 'Cottage For Tots',
    target: '_blank',
  },
  {
    url: 'https://www.willitraintomorrow.com/?ref=wateraday.com',
    name: 'Will It Rain Tomorrow?',
    target: '_blank',
  },
  {
    url: 'https://www.mainan.fun/?ref=wateraday.com',
    name: 'mainan.fun',
    target: '_blank',
  },
  {
    url: 'https://www.indieworldmap.com/?ref=wateraday.com',
    name: 'Indie World Map',
    target: '_blank',
  },
  {
    url: 'https://www.byeindonesia.com/?ref=wateraday.com',
    name: 'Bye Indonesia',
    target: '_blank',
  },
  {
    url: 'https://www.dentalclinicclosetome.my/?ref=wateraday.com',
    name: 'Dental Clinic Malaysia',
    target: '_blank',
  },
]

export function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="bg-[#030122]">
        <div className="mx-auto max-w-7xl px-6 py-10 text-start sm:py-16">
          <h3 className="mb-4 text-center font-heading text-lg font-semibold text-white sm:mb-12 sm:text-2xl">
            Popular Volume Unit Conversions
          </h3>
          <ul
            role="list"
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
          >
            {footerLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-base text-gray-300 transition-colors duration-300 hover:text-white"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-10 text-start sm:py-16">
          <h3 className="mb-4 text-center font-heading text-lg font-semibold text-gray-900 sm:mb-12 sm:text-2xl">
            Check out my other projects
          </h3>
          <ul
            role="list"
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
          >
            {projects.map((item) => (
              <li key={item.name}>
                <a
                  href={item.url}
                  className="text-base text-gray-900 transition-colors duration-300 hover:text-gray-600"
                  target={item.target}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-8 text-center">
        <p className="text-sm leading-5 text-gray-900">
          &copy; {` `}
          {new Date().getFullYear()} {` `}
          wateraday.com.
          <span className="ml-2 mt-0 inline-block text-gray-900">
            Built by{' '}
            <a
              href="https://www.yuurrific.com"
              className="inline-block font-medium underline underline-offset-4"
              target="_blank"
            >
              Yuurrific
            </a>
            .
          </span>
          <span className="mt-2 block text-gray-900 md:ml-2 md:mt-0 md:inline-block">
            Privacy-friendly analytics by{' '}
            <a
              href="https://go.yuurrific.com/simpleanalytics"
              className="inline-block rotate-0 rounded-md bg-blue-800 px-2 py-1 text-blue-100 transition duration-100 ease-out hover:-rotate-3 hover:ease-in"
              target="_blank"
              suppressHydrationWarning={true}
            >
              SimpleAnalytics
            </a>
          </span>
        </p>
      </div>
    </footer>
  )
}
