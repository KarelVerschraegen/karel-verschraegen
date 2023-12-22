import type { FC } from "react";

import { Karel, KarelFunny } from "~/assets/images";
import { EquipmentList, EquipmentListFirstFrame, LiquidEditor, LiquidEditorFirstFrame } from "~/assets/videos";
import { SOCIALS } from "~/constants/socials";
import { Grid, Heading, Icon, Image, Link, Text, TextContainer, TextStyle } from "~/ui";

const Index: FC = () => {
	return (
		<div className="flex flex-col gap-16">
			<header id="about">
				<Grid className="grid-cols-1 items-center justify-items-center gap-8 lg:grid-cols-4">
					<Grid.Item className="col-span-2">
						<div className="group relative">
							<Image
								alt="Funny Karel Verschraegen"
								src={KarelFunny}
								className="absolute inset-0 w-full max-w-lg rounded-xl opacity-0 transition-all duration-300 group-hover:rotate-3 group-hover:opacity-100"
								width={512}
								height={512}
							/>
							<Image
								alt="Karel Verschraegen"
								src={Karel}
								className="relative w-full max-w-lg rounded-xl opacity-100 transition-all duration-300 group-hover:rotate-3 group-hover:opacity-0"
								width={512}
								height={512}
							/>
						</div>
					</Grid.Item>

					<Grid.Item className="col-span-2">
						<TextContainer>
							<Heading element="h1">
								I'm <TextStyle variation="fancy">Karel</TextStyle>, a TypeScript dev passionate about
								all things digital!
							</Heading>

							<Text>
								I have spent the last 4+ years focused on all aspects of software development, ranging
								from creating beautiful applications in React and Vue to building backends in NestJS and
								PHP.
							</Text>

							<Text>
								I have proven success in rapid prototyping, product development, leadership, technical
								problem-solving, coordination and communication.
							</Text>

							<Text>
								Whenever I am not behind my computer, you'll find me exploring new countries, skiing on
								the slopes, or quoting The Office!
							</Text>

							<Text>
								Interesting in working together?{" "}
								<Link to="#contact" variation="fancy">
									Let's have a chat!
								</Link>
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
						<TextStyle variation="subdued">November 2023 - present</TextStyle>

						<Grid.Item className="lg:col-span-3">
							<TextContainer>
								<Heading element="h3">
									<TextStyle variation="fancy">Software Engineer</TextStyle>{" "}
									<Link to="https://www.qargo.io/" external className="not-prose">
										@ Qargo
									</Link>
								</Heading>

								<Text>Transport management software that shifts your business into higher gear.</Text>
							</TextContainer>
						</Grid.Item>
					</Grid>

					<Grid className="grid-cols-1 gap-4 lg:grid-cols-4">
						<TextStyle variation="subdued">February 2023 - May 2023</TextStyle>

						<Grid.Item className="lg:col-span-3">
							<TextContainer>
								<Heading element="h3">
									<TextStyle variation="fancy">Software Engineer</TextStyle>{" "}
									<Link to="https://www.aikido.dev/" external className="not-prose">
										@ Aikido
									</Link>
								</Heading>

								<Text>
									After 4 years at Cheqroom, the time has come for a new adventure! Aikido Security is
									on a mission to make building secure software easy for developers, so that no
									software company ever gets hacked. In short: we're building accessible and
									affordable security software. Built for devs, not security experts.
								</Text>

								<ul>
									<li>
										Help discover product-market-fit with newly built features by rapidly
										prototyping and iterating based on collected feedback
									</li>
									<li>Improve onboarding experience, open-source license scanning...</li>
								</ul>
							</TextContainer>
						</Grid.Item>
					</Grid>

					<Grid className="grid-cols-1 gap-4 lg:grid-cols-4">
						<TextStyle variation="subdued">July 2022 - February 2023</TextStyle>

						<Grid.Item className="lg:col-span-3">
							<TextContainer>
								<Heading element="h3">
									<TextStyle variation="fancy">Tech Lead</TextStyle>{" "}
									<Link to="https://cheqroom.com" external className="not-prose">
										@ Cheqroom
									</Link>
								</Heading>

								<Text>
									After having worked as a full stack TypeScript developer for 3 years, I was promoted
									to tech lead of a team of 4 people. My focus has since shifted from myself to
									helping out and unblocking my colleagues. I also:
								</Text>

								<ul>
									<li>
										Manage and host scrum meetings such as daily stand-ups, sprint reviews, team
										retrospectives...
									</li>
									<li>
										Communicate and coordinate feature releases, bug fixes and production deploys
									</li>
									<li>Unblock team members, provide feedback and technical insights</li>
									<li>Tackle technical debt, large refactors and general maintenance</li>
									<li>And so much more</li>
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
									<Link to="https://cheqroom.com" external className="not-prose">
										@ Cheqroom
									</Link>
								</Heading>

								<Text>
									After graduating Cum Laude in 2019, I joined Cheqroom as a full stack TypeScript
									developer with a focus on React, TypeScript and TailwindCSS. Ever since, I have
									grown as an engineer with skills ranging from React to NestJS, GraphQL, MongoDB,
									CQRS... I have:
								</Text>

								<ul>
									<li>Set up a communication layer between Knockout and React</li>
									<li>Build out the design system and accompanying component library</li>
									<li>Set up and deploy GraphQL microservices on AWS</li>
									<li>
										Cleaned up <i>so much</i> legacy code
									</li>
									<li>Automated the monorepo build/deployment process via GitHub Actions</li>
									<li>And so much more</li>
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
									<Link to="https://getrialto.com" external className="not-prose">
										@ Rialto
									</Link>
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
								I have always wanted to play with Remix and this seemed like the perfect excuse to give
								it a shot. Making this website has definitely pushed me out of my comfort zone as
								designing websites is not my forte. I am really happy with the end result and will use
								this as a playground to try out new technologies.
							</Text>

							<Text>
								Interested in the code? You can check it out on{" "}
								<Link
									to="https://github.com/KarelVerschraegen/karel-verschraegen"
									external
									variation="fancy"
								>
									GitHub.
								</Link>
							</Text>
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
								Shopify's Liquid templating language. This prototype demonstrates what a new template
								editor for Cheqroom could look like.
							</Text>

							<details>
								<summary>
									<TextStyle variation="fancy">Check out the demo!</TextStyle>
								</summary>

								<video
									className="rounded border border-slate-200 p-4 shadow dark:border-slate-700"
									controls
									poster={LiquidEditorFirstFrame}
									preload="none"
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
									className="rounded border border-slate-200 p-4 shadow dark:border-slate-700"
									controls
									poster={EquipmentListFirstFrame}
									preload="none"
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
						based in Belgium and open to relocate to wherever they serve beer and pizza!
					</Text>

					<Text>
						You can find me on all platforms or check out{" "}
						<Link
							external
							to="https://raw.githubusercontent.com/KarelVerschraegen/karel-verschraegen/master/app/assets/pdfs/karel-verschraegen-resume-simple.pdf"
							variation="fancy"
						>
							my resume
						</Link>
						!
					</Text>

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
