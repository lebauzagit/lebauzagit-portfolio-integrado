import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import brand from '../config/brand.json';
export const GET: APIRoute = async () => {
 const projects = await getCollection('work');
 const paths = ['/', '/es/', ...projects.filter(p => !p.slug.startsWith('es/')).flatMap(p => [`/work/${p.slug}/`, `/es/work/${p.slug}/`])];
 const escape = (v:string) => v.replace(/&/g,'&amp;').replace(/</g,'&lt;');
 return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${[...new Set(paths)].map(path=>`<url><loc>${escape(new URL(path,brand.profiles.portfolio.url).href)}</loc></url>`).join('')}</urlset>`, {headers:{'Content-Type':'application/xml'}});
};
