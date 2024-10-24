import JsonLd from './JsonLd'

export default function WebsiteJsonLd({
  company,
  url,
}: {
  company: string
  url: string
}) {
  return (
    <JsonLd id="website-jsonld">
      {{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: company,
        url: url,
        inLanguage: 'en-US',
      }}
    </JsonLd>
  )
}
