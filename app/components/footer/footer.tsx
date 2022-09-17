import { SOCIALS } from "~/constants/socials";
import { Text, Icon, TextStyle, Link } from "~/ui";

export const Footer = () => {
	return (
		<footer className="flex justify-between pt-8 border-t border-slate-200">
			<Text className="prose prose-slate">
				Made with{" "}
				<Link to="https://remix.run" external>
					<TextStyle variation="fancy">Remix</TextStyle>
				</Link>
				,{" "}
				<Link to="https://tailwindcss.com" external>
					<TextStyle variation="fancy">TailwindCSS</TextStyle>
				</Link>{" "}
				and lots of love!
			</Text>

			<ul className="flex flex-row gap-4">
				{SOCIALS.map((social) => (
					<li key={social.name}>
						<Link to={social.url}>
							<Icon className="hover:text-teal-500" size="medium" source={social.logo} />
						</Link>
					</li>
				))}
			</ul>
		</footer>
	);
};
