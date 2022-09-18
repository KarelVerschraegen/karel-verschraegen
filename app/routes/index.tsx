import type { FC } from "react";
import { Karel, KarelFunny } from "~/assets/images";
import { Icon, Image, Heading, Text, Grid, TextStyle, Link } from "~/ui";
import { SOCIALS } from "~/constants/socials";

const Index: FC = () => {
	return (
		<div className="flex flex-col gap-16">
			<header id="about">
				<Grid className="items-center grid-cols-1 gap-8 justify-items-center lg:grid-cols-4">
					<Grid.Item className="col-span-2">
						<div className="relative group">
							<Image
								alt="Funny Karel Verschraegen"
								src={KarelFunny}
								className="absolute inset-0 w-full max-w-lg transition-all opacity-0 group-hover:opacity-100 rounded-xl group-hover:rotate-3"
							/>
							<Image
								alt="Karel Verschraegen"
								src={Karel}
								className="relative w-full max-w-lg transition-all opacity-100 group-hover:opacity-0 rounded-xl group-hover:rotate-3"
							/>
						</div>
					</Grid.Item>

					<Grid.Item className="col-span-2">
						<article className="prose prose-slate">
							<Heading element="h1">
								I'm <TextStyle variation="fancy">Karel Verschraegen</TextStyle>, a TypeScript developer
								passionate about all things digitally!
							</Heading>

							<Text>
								I have spent the last 3.5+ years focused on all aspects of software development, ranging
								from building beautiful applications in React to setting up GraphQL resolvers and
								MongoDB databases.
							</Text>

							<Text>
								These days, I help solve equipment management problems for some of the biggest companies
								in the audio-visual industry where I primarily focus on front-end development in React
								and back-end development in NestJS with GraphQL.
							</Text>

							<Text>
								Whenever I am not behind my computer, you'll find me in a swimming pool, skiing on the
								slopes, or quoting The Office! Besides that, I love traveling and exploring the hidden
								gems each city has to offer, which I use as a guilt-free excuse to try every new
								restaraunt or bar.
							</Text>
						</article>
					</Grid.Item>
				</Grid>
			</header>

			<section id="experience">
				<Heading element="h2" className="mb-8">
					My professional trajectory so far!
				</Heading>

				<Grid className="grid-cols-1 gap-2 lg:gap-16 md:grid-cols-4">
					<Grid.Item>
						<TextStyle variation="subdued">July 2022 - present</TextStyle>
					</Grid.Item>

					<Grid.Item className="md:col-span-3">
						<article className="prose prose-slate">
							<Heading element="h3">
								<TextStyle variation="fancy">Tech Lead</TextStyle>{" "}
								<span className="not-prose">
									<Link to="https://cheqroom.com" external>
										@ Cheqroom
									</Link>
								</span>
							</Heading>

							<Text>
								After having worked as a full stack TypeScript developer for 3 years, I was promoted to
								tech lead of a team of 4 people. My focus has since shifted from myself to helping out
								and unblocking my colleagues. Besides helping out, I also:
							</Text>

							<ul>
								<li>
									Manage and host scrum ceremonies such as daily stand-ups, sprint reviews, team
									retrospectives, ...
								</li>
								<li>Communicate and coordinate feature releases, bug fixes and production deploys</li>
								<li>Unblock team members, provide feedback and technical insights</li>
								<li>Tackle technical debt, large refactors and cleaning up legacy code</li>
								<li>And so much more ...</li>
							</ul>
						</article>
					</Grid.Item>

					<Grid.Item>
						<TextStyle variation="subdued">July 2019 - July 2022</TextStyle>
					</Grid.Item>

					<Grid.Item className="md:col-span-3">
						<article className="prose prose-slate">
							<Heading element="h3">
								<TextStyle variation="fancy">Full stack TypeScript developer</TextStyle>{" "}
								<span className="not-prose">
									<Link to="https://cheqroom.com" external>
										@ Cheqroom
									</Link>
								</span>
							</Heading>

							<Text>
								After graduating Cum Laude in 2019, I joined Cheqroom as a full stack TypeScript
								developer with a focus on React, TypeScript and TailwindCSS. Ever since, I have grown as
								an engineer with skills ranging from React to NestJS, GraphQL, MongoDB, CQRS and so much
								more. I have:
							</Text>

							<ul>
								<li>Set up communication layer between our legacy Knockout and new React codebase</li>
								<li>Build out the design system and accompanying component library</li>
								<li>Set up and deploy GraphQL microservices on AWS</li>
								<li>
									Cleaned up <i>so much</i> legacy code
								</li>
								<li>Automated the monorepo build/deployment process via GitHub Actions</li>
								<li>And so much more ...</li>
							</ul>
						</article>
					</Grid.Item>

					<Grid.Item>
						<TextStyle variation="subdued">February 2019 - May 2019</TextStyle>
					</Grid.Item>

					<Grid.Item className="md:col-span-3">
						<article className="prose prose-slate">
							<Heading element="h3">
								<TextStyle variation="fancy">Intern TypeScript developer</TextStyle>{" "}
								<span className="not-prose">
									<Link to="https://getrialto.com" external>
										@ Rialto
									</Link>
								</span>
							</Heading>

							<Text>
								During my internship, I created a drawing tool that allowed office managers to draw
								office spaces on floorplans and show the availability of each office space in their
								portfolio.
							</Text>

							<Text>
								After teaching myself React, Redux and TypeScript, I built an SVG drawing library to
								help with drawing on floorplans. Besides my project, I also helped out with regular
								sprint work and bug fixing.
							</Text>
						</article>
					</Grid.Item>
				</Grid>
			</section>

			<section id="contact">
				<article className="prose prose-slate">
					<Heading element="h2">Interested in working with me?</Heading>

					<Text>
						Interested in working together? Feel free to reach out and let's have a chat! I am currently
						based in Belgium, considering moving to Berlin and open to relocate to wherever they serve beer
						and pizza!
					</Text>

					<Text>You can find me on all platforms!</Text>

					<div className="not-prose">
						<ul className="flex flex-row gap-4 lg:gap-8">
							{SOCIALS.map((social) => (
								<li key={social.name}>
									<Link to={social.url} aria-label={social.name} external>
										<Icon className="hover:text-cyan-500" size="large" source={social.logo} />
									</Link>
								</li>
							))}
						</ul>
					</div>
				</article>
			</section>
		</div>
	);
};

export default Index;
