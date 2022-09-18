import type { NavLinkProps } from "@remix-run/react";
import { NavLink as RemixNavLink } from "@remix-run/react";
import type { FC, ReactNode } from "react";

interface Props extends NavLinkProps {
	children: ReactNode;
}

// https://vhs.codeberg.page/post/simple-hover-animation-tailwindcss/
export const NavLink: FC<Props> = ({ children, ...rest }) => {
	return (
		<RemixNavLink className="relative p-2 text-base font-normal text-slate-900 group" {...rest}>
			<span
				className="absolute bottom-0 left-0 w-0 h-1 transition-all duration-300 rounded opacity-0 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full group-hover:opacity-100"
				aria-hidden="true"
			/>

			<span className="relative">{children}</span>
		</RemixNavLink>
	);
};
