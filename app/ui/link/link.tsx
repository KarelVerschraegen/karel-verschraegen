import type { AnchorHTMLAttributes, FC } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	element?: FC<any>;
	external?: boolean;
	to: string;
}

export const Link: FC<Props> = ({ className, children, element: Element = "a", external = false, to, ...rest }) => {
	const externalProps = external ? { target: "_blank noreferrer noopener" } : {};

	return (
		<Element className={`no-underline ${className}`} href={to} {...externalProps} {...rest}>
			{children}
		</Element>
	);
};
