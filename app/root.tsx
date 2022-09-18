import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import type { FC, PropsWithChildren } from "react";

import { Error } from "./components/error/error";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import styles from "./styles/app.css";

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

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="flex flex-col items-center sm:px-8 dark:bg-black bg-slate-100">
			<div className="w-full max-w-screen-xl min-h-screen p-8 bg-white shadow-xl dark:ring-1 dark:ring-zinc-300/20 dark:bg-zinc-900 md:px-16 xl:px-24">
				<div className="flex flex-col gap-16">
					<Header />

					<main>{children}</main>

					<Footer />
				</div>
			</div>
		</div>
	);
};

const Document: FC<PropsWithChildren> = ({ children }) => {
	return (
		<html lang="en" className="h-full antialiased scroll-smooth font-montserrat dark:text-slate-300 text-slate-700">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				{children}

				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
};

const App: FC = () => {
	return (
		<Document>
			<Layout>
				<Outlet />
			</Layout>
		</Document>
	);
};

interface ErrorBoundaryProps {
	error: Error;
}

export const ErrorBoundary: FC<ErrorBoundaryProps> = ({ error }) => {
	return (
		<Document>
			<Layout>
				<Error error={error} />
			</Layout>
		</Document>
	);
};

export default App;
