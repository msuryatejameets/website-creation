import { Helmet } from 'react-helmet-async'
import { profile } from '../data/profile'

function buildPhysicianSchema(includeBusiness = false) {
  const { name, title, specialty, summary, contact, location, credentials, achievements, social, seo } =
    profile

  const physician = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name,
    jobTitle: title,
    medicalSpecialty: specialty,
    description: summary,
    telephone: contact.phone,
    email: contact.email,
    url: seo.baseUrl,
    image: `${seo.baseUrl}${seo.ogImage}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: contact.address,
      addressLocality: location.city,
      addressRegion: location.state,
      addressCountry: location.country,
    },
    alumniOf: credentials.map((cred) => ({
      '@type': 'EducationalOrganization',
      name: cred.split('–').pop()?.trim() || cred,
    })),
    award: achievements.map((a) => a.title),
    sameAs: [social.linkedin, social.googleScholar, social.hospitalProfile].filter(Boolean),
  }

  if (includeBusiness) {
    return [
      physician,
      {
        '@context': 'https://schema.org',
        '@type': 'MedicalBusiness',
        name: location.clinic,
        description: `${specialty} practice led by ${name}`,
        telephone: contact.phone,
        email: contact.email,
        url: seo.baseUrl,
        address: physician.address,
        openingHours: contact.hours,
      },
    ]
  }

  return physician
}

export default function Seo({
  title,
  description,
  path = '/',
  keywords,
  schemaType = 'physician',
}) {
  const { seo, specialty, location } = profile
  const canonical = `${seo.baseUrl}${path === '/' ? '' : path}`
  const pageTitle = title || seo.siteName
  const pageDescription =
    description ||
    `${profile.name} is a ${specialty} in ${location.city}. ${profile.summary.slice(0, 100)}...`
  const pageKeywords = keywords || seo.defaultKeywords.join(', ')

  const jsonLd =
    schemaType === 'business'
      ? buildPhysicianSchema(true)
      : schemaType === 'physician'
        ? buildPhysicianSchema(false)
        : null

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={seo.siteName} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${seo.baseUrl}${seo.ogImage}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={`${seo.baseUrl}${seo.ogImage}`} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  )
}
