import type { FC, PropsWithChildren } from "react";

export const TextContainer: FC<PropsWithChildren> = ({ children }) => {
	return <div className="prose prose-slate dark:prose-invert">{children}</div>;
};
