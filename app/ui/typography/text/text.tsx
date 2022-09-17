import type { FC, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLParagraphElement> {}

export const Text: FC<Props> = ({ children, ...rest }) => {
	return <p {...rest}>{children}</p>;
};
