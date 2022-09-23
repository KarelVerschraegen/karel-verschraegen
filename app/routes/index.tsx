import type { FC } from "react";

import { Karel, KarelFunny, Wisserke } from "~/assets/images";
import { EquipmentList, EquipmentListFirstFrame, LiquidEditor, LiquidEditorFirstFrame } from "~/assets/videos";
import { SOCIALS } from "~/constants/socials";
import { Grid, Heading, Icon, Image, Link, Text, TextContainer, TextStyle } from "~/ui";

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
								className="absolute inset-0 w-full max-w-lg transition-all duration-300 opacity-0 group-hover:opacity-100 rounded-xl group-hover:rotate-3"
								width={512}
								height={512}
							/>
							<Image
								alt="Karel Verschraegen"
								src={Karel}
								className="relative w-full max-w-lg transition-all duration-300 opacity-100 group-hover:opacity-0 rounded-xl group-hover:rotate-3"
								width={512}
								height={512}
							/>
						</div>
					</Grid.Item>

					<Grid.Item className="col-span-2">
						<TextContainer>
							<Heading element="h1">
								I'm <TextStyle variation="fancy">Karel Verschraegen</TextStyle>, a TypeScript developer
								passionate about all things digital!
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
						</TextContainer>
					</Grid.Item>
				</Grid>
			</header>

			<section id="experience">
				<Heading element="h2" className="mb-8">
					My professional trajectory so far!
				</Heading>

				<div className="flex flex-col gap-16">
					<Grid className="grid-cols-1 gap-4 lg:grid-cols-4">
						<TextStyle variation="subdued">July 2022 - present</TextStyle>

						<Grid.Item className="lg:col-span-3">
							<TextContainer>
								<Heading element="h3">
									<TextStyle variation="fancy">Tech Lead</TextStyle>{" "}
									<span className="not-prose">
										<Link to="https://cheqroom.com" external>
											@ Cheqroom
										</Link>
									</span>
								</Heading>

								<Text>
									After having worked as a full stack TypeScript developer for 3 years, I was promoted
									to tech lead of a team of 4 people. My focus has since shifted from myself to
									helping out and unblocking my colleagues. Besides helping out, I also:
								</Text>

								<ul>
									<li>
										Manage and host scrum ceremonies such as daily stand-ups, sprint reviews, team
										retrospectives, ...
									</li>
									<li>
										Communicate and coordinate feature releases, bug fixes and production deploys
									</li>
									<li>Unblock team members, provide feedback and technical insights</li>
									<li>Tackle technical debt, large refactors and cleaning up legacy code</li>
									<li>And so much more ...</li>
								</ul>
							</TextContainer>
						</Grid.Item>
					</Grid>

					<Grid className="grid-cols-1 gap-4 lg:grid-cols-4">
						<TextStyle variation="subdued">July 2019 - July 2022</TextStyle>

						<Grid.Item className="lg:col-span-3">
							<TextContainer>
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
									developer with a focus on React, TypeScript and TailwindCSS. Ever since, I have
									grown as an engineer with skills ranging from React to NestJS, GraphQL, MongoDB,
									CQRS and so much more. I have:
								</Text>

								<ul>
									<li>
										Set up communication layer between our legacy Knockout and new React codebase
									</li>
									<li>Build out the design system and accompanying component library</li>
									<li>Set up and deploy GraphQL microservices on AWS</li>
									<li>
										Cleaned up <i>so much</i> legacy code
									</li>
									<li>Automated the monorepo build/deployment process via GitHub Actions</li>
									<li>And so much more ...</li>
								</ul>
							</TextContainer>
						</Grid.Item>
					</Grid>

					<Grid className="grid-cols-1 gap-4 lg:grid-cols-4">
						<TextStyle variation="subdued">February 2019 - May 2019</TextStyle>

						<Grid.Item className="lg:col-span-3">
							<TextContainer>
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
							</TextContainer>
						</Grid.Item>
					</Grid>
				</div>
			</section>

			<section id="projects">
				<Heading element="h2" className="mb-8">
					Some of the projects I have worked on!
				</Heading>

				<ul className="flex flex-col gap-16">
					<li>
						<TextContainer>
							<Heading element="h3">
								<TextStyle variation="fancy">This website</TextStyle>
							</Heading>

							<Text>
								I have always wanted play with Remix and this seemed like the perfect excuse to give it
								a shot. Making this website has definitely pushed me out of my comfort zone. On a daily
								basis, designers create beautiful interfaces for me to build, but now it became my
								responsibility! I am really happy with the end result and will use this as a playground
								to try out new technologies.
							</Text>

							<Text>
								Interested in the code? You can check it out on{" "}
								<Link to="https://github.com/KarelVerschraegen/karel-verschraegen" external>
									<TextStyle variation="fancy">GitHub.</TextStyle>
								</Link>
							</Text>
						</TextContainer>
					</li>

					<li>
						<TextContainer>
							<Heading element="h3">
								<TextStyle variation="fancy">Wisserke</TextStyle>
							</Heading>

							<Text>
								Wisserke is a <i>very small</i> GitHub bot that I wrote to keep my colleagues
								entertained. The name 'Wisserke' is a reference to a Belgian TV show called 'Het
								Eiland', where a developer tries to delete data from someone's personal computer.
								Whenever you create a pull request, Wisserke will inspect your deletions and if they
								exceed a certain threshold, it will post a GIF on your pull request.
							</Text>

							<Text>
								Interested in the code? You can check it out on{" "}
								<Link to="https://github.com/KarelVerschraegen/wisserke" external>
									<TextStyle variation="fancy">GitHub.</TextStyle>
								</Link>
							</Text>

							<details>
								<summary>
									<TextStyle variation="fancy">Learn more</TextStyle>
								</summary>

								<Text>
									Wisserke uses Probot to communicate with the GitHub API. It is hosted on Heroku and
									can be enabled on every GitHub repository! Below is an example of the comments
									'Wisserke' will post:
								</Text>

								<Image
									className="p-4 border rounded shadow border-slate-200 dark:border-slate-700"
									alt="Wisserke in action on a GitHub pull request"
									loading="lazy"
									src={Wisserke}
									height={500}
									width={500}
								/>
							</details>
						</TextContainer>
					</li>

					<li>
						<TextContainer>
							<Heading element="h3">
								<TextStyle variation="fancy">Liquid template editor</TextStyle> @ Cheqroom
							</Heading>

							<Text>
								From ideation, to designing and prototyping in just two days! During a hackathon at
								Cheqroom, a colleague and I created a prototype for a PDF template editor based on
								Shopify's Liquid templating language. At Cheqroom, users can create and manage custom
								PDF templates with CKEditor and Python but this is a very cumbersome process. This
								prototype demonstrates what a new template editor could look like based on Liquid.
							</Text>

							<details>
								<summary>
									<TextStyle variation="fancy">Check out the demo!</TextStyle>
								</summary>

								<video
									className="p-4 border rounded shadow border-slate-200 dark:border-slate-700"
									controls
									poster={LiquidEditorFirstFrame}
								>
									This browser does not support embedded video players
									<source src={LiquidEditor} type="video/mp4" />
								</video>
							</details>
						</TextContainer>
					</li>

					<li>
						<TextContainer>
							<Heading element="h3">
								<TextStyle variation="fancy">Embeddable equipment list</TextStyle> @ Cheqroom
							</Heading>

							<Text>
								At Cheqroom, customers can expose their inventory by creating a public equipment list.
								This list can either be embedded in their own application or live as a standalone
								website. Users can configure the logo, accent colors, available filters, opening hours,
								...
							</Text>

							<details>
								<summary>
									<TextStyle variation="fancy">Check out the demo!</TextStyle>
								</summary>

								<video
									className="p-4 border rounded shadow border-slate-200 dark:border-slate-700"
									controls
									poster={EquipmentListFirstFrame}
								>
									This browser does not support embedded video players
									<source src={EquipmentList} type="video/mp4" />
								</video>
							</details>
						</TextContainer>
					</li>
				</ul>
			</section>

			<section id="contact">
				<TextContainer>
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
				</TextContainer>
			</section>
		</div>
	);
};

export default Index;
