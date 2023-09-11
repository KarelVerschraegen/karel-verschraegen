import type { AnchorHTMLAttributes, FC } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	element?: FC<any>;
	external?: boolean;
	to: string;
}

export const Link: FC<Props> = ({
	children,
	className = "",
	element: Element = "a",
	external = false,
	to,
	...rest
}) => {
	const externalProps = external ? { target: "_blank noreferrer noopener" } : {};

	return (
		<Element className={twMerge(`no-underline`, className)} href={to} {...externalProps} {...rest}>
			{children}
		</Element>
	);
};
