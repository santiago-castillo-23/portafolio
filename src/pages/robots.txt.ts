import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const robots = `User-agent: *
Allow: /portafolio/
Disallow: 

Sitemap: https://santiago-castillo-23.github.io/portafolio/sitemap.xml`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain'
    }
  });
};
