import type { APIRoute } from 'astro';
import { assetUrl } from '../utils/urls';

export const GET: APIRoute = ({ site }) => {
  const canonical = new URL(assetUrl(''), site).href;
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${canonical.replace(/&/g, '&amp;')}</loc></url></urlset>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
