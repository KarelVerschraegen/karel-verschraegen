import type { FC, SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGElement> {}

// https://icons8.com/icon/set/social-media/small
export const LinkedIn: FC<Props> = (props) => {
	return (
		<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" {...props}>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeMiterlimit="10"
				strokeWidth="2"
				d="M3 16L13 16 13 35.665 13 45 3 45z"
			/>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeMiterlimit="10"
				strokeWidth="1.976"
				d="M8,12L8,12c-3,0-5-1.813-5-4.053S5,4,8,4s4.875,1.707,5,3.947C13,10.187,11.125,12,8,12z"
			/>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeMiterlimit="10"
				strokeWidth="2"
				d="M37,28.5c0-2.485-2.015-4.5-4.5-4.5S28,26.015,28,28.5c0,0,0,0.125,0,0.25c0,0.125,0,0.25,0,0.25c0,1.291,0,16,0,16H18V16h10v3.639c0,0,3.27-3.639,8.787-3.639C42.422,16,47,20.135,47,28v17H37C37,45,37,29.557,37,28.5"
			/>
		</svg>
	);
};
