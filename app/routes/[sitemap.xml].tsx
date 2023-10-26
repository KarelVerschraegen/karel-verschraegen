import { generateSitemap } from "@nasa-gcn/remix-seo";
import { routes } from "@remix-run/dev/server-build";
import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = ({ request }) => {
	return generateSitemap(request, routes, {
		siteUrl: "https://www.karelverschraegen.com",
	});
};
