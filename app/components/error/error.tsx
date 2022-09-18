import type { FC } from "react";

import { KarelFunny } from "~/assets/images";
import { Grid, Heading, Image, Link, Text, TextStyle } from "~/ui";

interface ErrorProps {
	error: Error;
}

export const Error: FC<ErrorProps> = ({ error }) => {
	return (
		<Grid className="grid-cols-2 gap-8">
			<article className="prose">
				<Heading element="h1">
					<TextStyle variation="fancy">Whoopsie</TextStyle>, it looks like Karel made a mistake!
				</Heading>

				<Text>
					We'll try to fix this one as soon as possible! If this issue does not get resolved in time, feel
					free to{" "}
					<Link to="mailto:karelverschraegenbiz@gmail.com">
						<TextStyle variation="fancy">reach out to me!</TextStyle>
					</Link>
				</Text>

				<TextStyle variation="subdued">{error.message}</TextStyle>
			</article>

			<Image
				alt="Funny Karel Verschraegen"
				className="relative w-full max-w-lg transition-all opacity-100 group-hover:opacity-0 rounded-xl group-hover:rotate-3"
				src={KarelFunny}
				width={512}
				height={512}
			/>
		</Grid>
	);
};
