import type { FC, HTMLAttributes } from "react";

type Element = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
	element: Element;
}

const STYLES: Record<Element, string> = {
	h1: "text-4xl",
	h2: "text-3xl",
	h3: "text-xl",
	h4: "text-xl",
	h5: "text-lg",
	h6: "text-lg",
};

export const Heading: FC<Props> = ({ children, className = "", element: Element, ...rest }) => {
	return (
		<Element className={`text-slate-900 dark:text-slate-100 font-bold ${STYLES[Element]} ${className}`} {...rest}>
			{children}
		</Element>
	);
};
