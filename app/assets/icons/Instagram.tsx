import type { FC, SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGElement> {}

// https://icons8.com/icon/set/social-media/small
export const Instagram: FC<Props> = (props) => {
	return (
		<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" {...props}>
			<path
				fill="none"
				stroke="currentColor"
				strokeMiterlimit="10"
				strokeWidth="2"
				d="M16,46h18c6.627,0,12-5.373,12-12V16c0-6.627-5.373-12-12-12H16C9.373,4,4,9.373,4,16v18C4,40.627,9.373,46,16,46z"
			/>
			<path
				fill="none"
				stroke="currentColor"
				strokeMiterlimit="10"
				strokeWidth="2"
				d="M25 15A10 10 0 1 0 25 35A10 10 0 1 0 25 15Z"
			/>
			<path d="M37 11A2 2 0 1 0 37 15A2 2 0 1 0 37 11Z" />
		</svg>
	);
};
