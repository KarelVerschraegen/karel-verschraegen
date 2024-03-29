import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useRouteError } from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
import type { FC, PropsWithChildren } from "react";

import "~/tailwind.css";

import { Error } from "./components/error/error";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";

export const meta: MetaFunction = () => {
	const description = "Karel Verschraegen, a TypeScript developer passionate about all things digital!";

	return [
		{ charset: "utf-8" },
		{ title: "Karel Verschraegen" },
		{ name: "viewport", content: "width=device-width,initial-scale=1" },
		{ name: "keywords", content: "Karel Verschraegen,resume,cv,software developer" },
		{ name: "description", content: description },
		{ "twitter:card": "summary" },
		{ "twitter:creator": "@karelverschrae" },
		{ "twitter:site": "@karelverschrae" },
		{ "twitter:title": "Karel Verschraegen" },
		{ "twitter:description": description },
	];
};

export const links: LinksFunction = () => [
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap",
	},
];

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="flex flex-col items-center bg-slate-100 sm:px-8 dark:bg-slate-900/95">
			<div className="min-h-screen w-full max-w-screen-xl bg-white p-8 shadow-xl md:px-16 xl:px-24 dark:bg-slate-900">
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
		<html
			className="h-full scroll-smooth font-montserrat text-slate-700 antialiased dark:text-slate-300"
			dir="ltr"
			lang="en"
		>
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				{children}

				<ScrollRestoration />
				<Scripts />
				<Analytics />
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

export const ErrorBoundary: FC<ErrorBoundaryProps> = () => {
	const error = useRouteError();

	return (
		<Document>
			<Layout>
				<Error error={error} />
			</Layout>
		</Document>
	);
};

export default App;
