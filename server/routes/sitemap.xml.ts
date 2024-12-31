import { SitemapStream, streamToPromise } from 'sitemap'
import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find()
  const sitemap = new SitemapStream({
    hostname: 'https://canvas.hrcd.fr',
  })

  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: 'daily',
    })
  }
  // Add static pages
  const staticPages = [
    { url: '/', changefreq: 'daily' },
    { url: '/about', changefreq: 'daily' },
    { url: '/contact', changefreq: 'daily' },
    { url: '/works', changefreq: 'daily' },
    { url: '/writing', changefreq: 'daily' },
    // Redirects
    { url: '/bot', changefreq: 'daily' },
    { url: '/invite', changefreq: 'daily' },
  ]

  for (const page of staticPages) {
    sitemap.write(page)
  }

  sitemap.end()
  return streamToPromise(sitemap)
})
