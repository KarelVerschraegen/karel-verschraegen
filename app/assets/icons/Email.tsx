import type { FC, SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGElement> {}

// https://icons8.com/icon/set/social-media/small
export const Email: FC<Props> = (props) => {
	return (
		<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" {...props}>
			<polyline
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeMiterlimit="10"
				strokeWidth="2"
				points="48,16 25,33 2,16"
			/>
			<polyline
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeMiterlimit="10"
				strokeWidth="2"
				points="38.12,10.3 25,20 11.88,10.3 11.87,10.3"
			/>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeMiterlimit="10"
				strokeWidth="2"
				d="M12,11	v31H4.5C3.119,42,2,40.881,2,39.5V12.41c0-1.508,0.616-2.872,1.61-3.852C5.092,7.096,7.467,7.042,9.14,8.28l2.73,2.02h0.01"
			/>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeMiterlimit="10"
				strokeWidth="2"
				d="M38.12,10.3l2.746-2.027c1.672-1.235,4.043-1.181,5.525,0.278c0.01,0.01,0.02,0.019,0.03,0.029C47.4,9.56,48,10.92,48,12.41V39.5	c0,1.381-1.119,2.5-2.5,2.5H38V11"
			/>
		</svg>
	);
};
