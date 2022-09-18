import type { FC, ImgHTMLAttributes } from "react";

import { Image } from "~/ui";

type Size = "small" | "medium" | "large";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
	alt: string;
	size?: Size;
}

interface HtmlSize {
	height: number | string;
	width: number | string;
}

const HTML_SIZES: Record<Size, HtmlSize> = {
	small: { height: "2rem", width: "2rem" },
	medium: { height: "3rem", width: "3rem" },
	large: { height: "4rem", width: "4rem" },
};

const CSS_SIZES: Record<Size, string> = {
	small: "w-8 h-8",
	medium: "w-12 h-12",
	large: "w-16 h-16",
};

export const Avatar: FC<Props> = ({ alt, className = "", size = "medium", ...rest }) => {
	return (
		<Image alt={alt} className={`inline-block rounded-full ${CSS_SIZES[size]}`} {...HTML_SIZES[size]} {...rest} />
	);
};
