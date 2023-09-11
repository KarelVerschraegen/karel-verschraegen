import type { FC } from "react";

import { KarelFunny } from "~/assets/images";
import { Grid, Heading, Image, Link, Text, TextContainer, TextStyle } from "~/ui";

interface ErrorProps {
	error: unknown;
}

export const Error: FC<ErrorProps> = ({ error }) => {
	const message = typeof error === "string" ? error : "Unknown error";

	return (
		<Grid className="grid-cols-2 gap-8">
			<TextContainer>
				<Heading element="h1">
					<TextStyle variation="feisty">Whoopsie</TextStyle>, it looks like Karel made a mistake!
				</Heading>

				<Text>
					We'll try to fix this one as soon as possible! If this issue does not get resolved in time, feel
					free to{" "}
					<Link to="mailto:karelverschraegenbiz@gmail.com">
						<TextStyle variation="feisty">reach out to me!</TextStyle>
					</Link>
				</Text>

				<TextStyle variation="subdued">{message}</TextStyle>
			</TextContainer>

			<Image
				alt="Funny Karel Verschraegen"
				className="w-full max-w-lg rounded-xl"
				src={KarelFunny}
				width={512}
				height={512}
			/>
		</Grid>
	);
};
