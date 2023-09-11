import type { LoaderFunction } from "@remix-run/node";

const robotText = `
User-agent: Googlebot
Disallow: /nogooglebot/

User-agent: *
Allow: /

Sitemap: https://karelverschraegen.com/sitemap.xml
`;

export const loader: LoaderFunction = () => {
	return new Response(robotText, {
		status: 200,
		headers: {
			"Content-Type": "text/plain",
		},
	});
};
