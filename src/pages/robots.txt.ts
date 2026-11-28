import type { APIRoute } from 'astro';
import brand from '../config/brand.json';

export const GET: APIRoute = () => {
	const sitemap = new URL('/sitemap.xml', brand.profiles.portfolio.url);

	return new Response(`User-agent: *\nAllow: /\nSitemap: ${sitemap.href}\n`, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
