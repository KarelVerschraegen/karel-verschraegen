import { generateRobotsTxt } from "@nasa-gcn/remix-seo";
import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = () => {
	return generateRobotsTxt([{ type: "sitemap", value: "https://karelverschraegen.com/sitemap.xml" }]);
};
