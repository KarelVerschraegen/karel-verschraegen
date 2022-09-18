import type { FC, HTMLAttributes } from "react";

type Variation = "fancy" | "feisty" | "subdued";

interface Props extends HTMLAttributes<HTMLSpanElement> {
	variation: Variation;
}

const VARIATIONS: Record<Variation, string> = {
	fancy: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500",
	feisty: "text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500",
	subdued: "text-slate-500 dark:text-slate-100",
};

export const TextStyle: FC<Props> = ({ className = "", children, variation, ...rest }) => {
	return (
		<span className={`${VARIATIONS[variation]} ${className}`} {...rest}>
			{children}
		</span>
	);
};
