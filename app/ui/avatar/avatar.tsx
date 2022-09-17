import type { FC, ImgHTMLAttributes } from "react";
import { Image } from "~/ui";

type Size = "small" | "medium" | "large";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
	alt: string;
	size?: Size;
}

const SIZES: Record<Size, string> = {
	small: "w-8 h-8",
	medium: "w-12 h-12",
	large: "w-16 h-16",
};

export const Avatar: FC<Props> = ({ alt, className = "", size = "medium", ...rest }) => {
	return <Image className={`inline-block rounded-full ${SIZES[size]}`} alt={alt} {...rest} />;
};
