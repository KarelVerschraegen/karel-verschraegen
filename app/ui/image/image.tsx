import type { FC, ImgHTMLAttributes } from "react";

// Make alt, width and height required instead of optional
interface Props extends ImgHTMLAttributes<HTMLImageElement> {
	alt: string;
	height: number | string;
	width: number | string;
}

export const Image: FC<Props> = ({ alt, ...rest }) => <img alt={alt} {...rest} />;
