import type { APIRoute } from 'astro';

const getSitemap = () => {
  const baseUrl = 'https://santiago-castillo-23.github.io/portafolio';
  
  const pages = [
    { url: '', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: '1.0' },
    { url: '#sobre-mi', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: '0.8' },
    { url: '#proyectos', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: '0.9' },
    { url: '#tipos-tejas', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: '0.8' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

export const GET: APIRoute = () => {
  return new Response(getSitemap(), {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
};
