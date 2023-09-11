import { SOCIALS } from "~/constants/socials";
import { Icon, Link, Text, TextStyle } from "~/ui";

export const Footer = () => {
	return (
		<footer className="flex flex-col justify-between gap-4 border-t border-slate-200 pt-8 dark:border-slate-700 sm:flex-row">
			<Text>
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
						<Link aria-label={social.name} to={social.url} external>
							<Icon className="hover:text-teal-500" size="medium" source={social.logo} />
						</Link>
					</li>
				))}
			</ul>
		</footer>
	);
};
