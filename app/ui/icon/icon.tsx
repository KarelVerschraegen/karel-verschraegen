import type { FC, SVGAttributes } from "react";

type Size = "small" | "medium" | "large";
type IconSource = FC<any>;

interface Props extends SVGAttributes<SVGElement> {
	source: IconSource;
	size: Size;
}

interface IconSize {
	height: string;
	width: string;
}

const SIZES: Record<Size, IconSize> = {
	small: { height: "16px", width: "16px" },
	medium: { height: "24px", width: "24px" },
	large: { height: "48px", width: "48px" },
};

export const Icon: FC<Props> = ({ className = "", source: Source, size = "medium" }) => (
	<Source className={`text-slate-700 ${className}`} {...SIZES[size]} />
);
