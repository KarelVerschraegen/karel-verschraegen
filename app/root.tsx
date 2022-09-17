import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

import styles from "./styles/app.css";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

export const meta: MetaFunction = () => {
	const description = "Karel Verschraegen, a TypeScript developer passionate about all things digitally!";

	return {
		charset: "utf-8",
		title: "Karel Verschraegen",
		viewport: "width=device-width,initial-scale=1",
		keywords: "Karel Verschraegen,resume,cv,software developer",
		description,
		"twitter:image": "TODO",
		"twitter:card": "summary_large_image",
		"twitter:creator": "@karelverschrae",
		"twitter:site": "@karelverschrae",
		"twitter:title": "Karel Verschraegen",
		"twitter:description": description,
	};
};

export const links: LinksFunction = () => [
	{ rel: "stylesheet", href: styles },
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap",
	},
];

export default function App() {
	return (
		<html lang="en" className="h-full antialiased scroll-smooth font-montserrat text-slate-700">
			<head>
				<Meta />
				<Links />
			</head>
			<body className="flex flex-col items-center h-full sm:px-8 bg-slate-100">
				<div className="w-full max-w-screen-xl p-8 bg-white shadow-xl md:px-16 xl:px-24">
					<div className="flex flex-col gap-16">
						<Header />

						<main>
							<Outlet />
						</main>

						<Footer />
					</div>
				</div>

				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
