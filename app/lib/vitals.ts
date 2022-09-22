import type { Metric } from "web-vitals";
import { onCLS, onFCP, onFID, onLCP, onTTFB } from "web-vitals";

const vitalsUrl = "https://vitals.vercel-analytics.com/v1/vitals";

function getConnectionSpeed() {
	// @ts-ignore
	return "connection" in navigator && navigator["connection"] && "effectiveType" in navigator["connection"]
		? // @ts-ignore
		  navigator["connection"]["effectiveType"]
		: "";
}

function sendToAnalytics(metric: Metric, options: WebvitalsOptions) {
	const page = Object.entries(options.params || {}).reduce(
		(acc, [key, value]) => acc.replace(value, `[${key}]`),
		options.path
	);

	const body = {
		dsn: options.analyticsId,
		id: metric.id,
		page,
		href: location.href,
		event_name: metric.name, // TTFB
		value: metric.value.toString(), // 60.20000000298023
		speed: getConnectionSpeed(), // 4g
	};

	if (options.debug) {
		console.log("[Analytics]", metric.name, JSON.stringify(body, null, 2));
	}

	const blob = new Blob([new URLSearchParams(body).toString()], {
		// This content type is necessary for `sendBeacon`
		type: "application/x-www-form-urlencoded",
	});
	if (navigator.sendBeacon) {
		navigator.sendBeacon(vitalsUrl, blob);
	} else
		fetch(vitalsUrl, {
			body: blob,
			method: "POST",
			credentials: "omit",
			keepalive: true,
		});
}

interface WebvitalsOptions {
	analyticsId: string;
	debug?: string;
	params?: string;
	path: string;
}

export function webVitals(options: WebvitalsOptions) {
	try {
		onFID((metric) => sendToAnalytics(metric, options));
		onTTFB((metric) => sendToAnalytics(metric, options));
		onLCP((metric) => sendToAnalytics(metric, options));
		onCLS((metric) => sendToAnalytics(metric, options));
		onFCP((metric) => sendToAnalytics(metric, options));
	} catch (err) {
		console.error("[Analytics]", err);
	}
}
