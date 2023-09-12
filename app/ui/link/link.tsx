import type { AnchorHTMLAttributes, FC } from "react";
import { twMerge } from "tailwind-merge";

import { VARIATIONS } from "../typography/text-style/text-style";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	element?: FC<any>;
	external?: boolean;
	to: string;
	variation?: "default" | "fancy";
}

export const Link: FC<Props> = ({
	children,
	className = "",
	element: Element = "a",
	external = false,
	to,
	variation = "default",
	...rest
}) => {
	const externalProps = external ? { target: "_blank noreferrer noopener" } : {};

	return (
		<Element
			className={twMerge(`no-underline`, variation === "fancy" && VARIATIONS["fancy"], className)}
			href={to}
			{...externalProps}
			{...rest}
		>
			{children}
		</Element>
	);
};
