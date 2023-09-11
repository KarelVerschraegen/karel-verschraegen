import type { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends HTMLAttributes<HTMLDivElement> {}

interface ComponentComposition {
	Item: typeof Item;
}

const Item: FC<Props> = ({ children, ...rest }) => {
	return <div {...rest}>{children}</div>;
};

export const Grid: FC<Props> & ComponentComposition = ({ children, className = "", ...rest }) => {
	return (
		<div className={twMerge(`grid`, className)} {...rest}>
			{children}
		</div>
	);
};

Grid.Item = Item;
