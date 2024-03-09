import { generateSitemap } from "@nasa-gcn/remix-seo";
import type { LoaderFunction } from "@remix-run/node";
// @ts-ignore
import { routes } from "virtual:remix/server-build";

export const loader: LoaderFunction = ({ request }) => {
	return generateSitemap(request, routes, {
		siteUrl: "https://www.karelverschraegen.com",
	});
};
