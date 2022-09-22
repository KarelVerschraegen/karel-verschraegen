import { RemixBrowser } from "@remix-run/react";
import { hydrateRoot } from "react-dom/client";

import { webVitals } from "./lib/vitals";

hydrateRoot(document, <RemixBrowser />);

if (process.env.VERCEL_ANALYTICS_ID) {
	webVitals({
		analyticsId: process.env.VERCEL_ANALYTICS_ID as string,
		path: "/",
	});
}
