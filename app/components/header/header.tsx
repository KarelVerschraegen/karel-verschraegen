import { Link } from "@remix-run/react";

import { Karel } from "~/assets/images";
import { Avatar, Heading, NavLink, TextStyle } from "~/ui";

const ROUTES = [
	{ name: "About", to: "/#about" },
	{ name: "Experience", to: "/#experience" },
	{ name: "Projects", to: "/#projects" },
	{ name: "Contact", to: "/#contact" },
];

export const Header = () => {
	return (
		<header className="flex items-center justify-end border-b border-slate-200 pb-4 md:justify-between dark:border-slate-700">
			<Link to="/" className="pointer-events-auto hidden items-center gap-4 md:flex" aria-label="Home">
				<Avatar src={Karel} alt="Karel Verschraegen" />

				<Heading element="h1" className="text-2xl">
					<TextStyle variation="fancy">Karel Verschraegen</TextStyle>
				</Heading>
			</Link>

			<nav>
				<ul className="flex items-center gap-2 md:gap-4 lg:gap-8">
					{ROUTES.map((route) => (
						<li key={route.name}>
							<NavLink to={route.to}>{route.name}</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};
