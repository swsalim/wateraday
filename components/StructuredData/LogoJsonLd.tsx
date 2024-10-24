import JsonLd from './JsonLd'

export default function LogoJsonLd({
  url,
  logo,
}: {
  url: string
  logo: string
}) {
  return (
    <JsonLd id="logo-jsonld">
      {{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Water a Day',
        logo: logo,
        url: url,
      }}
    </JsonLd>
  )
}
