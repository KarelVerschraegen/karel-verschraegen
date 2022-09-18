import { Link } from "@remix-run/react";

import { Karel } from "~/assets/images";
import { Avatar, Heading, NavLink, TextStyle } from "~/ui";

const ROUTES = [
	{ name: "About", to: "/#about" },
	{ name: "Experience", to: "/#experience" },
	{ name: "Contact", to: "/#contact" },
];

export const Header = () => {
	return (
		<header className="flex items-center justify-end pb-4 border-b md:justify-between border-slate-200">
			<Link to="/" className="items-center hidden gap-4 pointer-events-auto md:flex" aria-label="Home">
				<Avatar src={Karel} alt="Karel Verschraegen" />

				<Heading element="h1" className="!text-2xl">
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
