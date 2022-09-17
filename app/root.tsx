import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

import styles from "./styles/app.css";

export const meta: MetaFunction = () => ({
	charset: "utf-8",
	title: "Karel Verschraegen",
	viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
	{ rel: "stylesheet", href: styles },
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap",
	},
];

export default function App() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
