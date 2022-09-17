import type { FC, ImgHTMLAttributes } from "react";

// Make alt required instead of optional
interface Props extends ImgHTMLAttributes<HTMLImageElement> {
	alt: string;
}

export const Image: FC<Props> = ({ alt, ...rest }) => <img alt={alt} {...rest} />;
