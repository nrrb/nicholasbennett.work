// Per-route head tags. These end up in the prerendered HTML.
const ORIGIN = 'https://nicholasbennett.work'

export function pageHead(meta, path, ogName) {
  const url = ORIGIN + path
  const image = meta.image ? `${ORIGIN}${meta.image}` : `${ORIGIN}/og/${ogName}.png`
  return {
    title: meta.title,
    link: [{ rel: 'canonical', href: url }],
    meta: [
      { name: 'description', content: meta.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: url },
      { property: 'og:title', content: meta.title },
      { property: 'og:description', content: meta.description },
      { property: 'og:image', content: image },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }
}
