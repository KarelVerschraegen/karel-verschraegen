import type { LoaderFunction } from "@remix-run/node";

const buildTime = new Date().toISOString();

const content = `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<url>
		<loc>https://karelverschraegen.com/</loc>
		<lastmod>${buildTime}</lastmod>
	</url>

	<url>
		<loc>https://karelverschraegen.com/uses</loc>
		<lastmod>${buildTime}</lastmod>
	</url>
</urlset>
`;

export const loader: LoaderFunction = () => {
	return new Response(content, {
		status: 200,
		headers: {
			"Content-Type": "application/xml",
			"xml-version": "1.0",
			encoding: "UTF-8",
		},
	});
};
