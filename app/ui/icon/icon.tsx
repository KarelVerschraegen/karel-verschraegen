import type { FC, SVGAttributes } from "react";
import { twMerge } from "tailwind-merge";

import type { IconName } from "../../@types/icon";
import spriteSheet from "../../assets/icons/sprite.svg";

type Size = "small" | "medium" | "large";

interface Props extends SVGAttributes<SVGElement> {
	source: IconName;
	size: Size;
}

const SIZES: Record<Size, string> = {
	small: "w-4 h-4",
	medium: "w-6 h-6",
	large: "w-12 h-12",
};

export const Icon: FC<Props> = ({ className = "", source, size = "medium" }) => (
	<svg className={twMerge(`text-slate-700 dark:text-slate-300`, SIZES[size], className)}>
		<use href={`${spriteSheet}#${source}`} />
	</svg>
);
