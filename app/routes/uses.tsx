import { Grid, Heading, Text, TextContainer, TextStyle } from "~/ui";

const Uses = () => {
	return (
		<div className="flex flex-col gap-16">
			<header>
				<TextContainer>
					<Heading element="h1">Interesting in knowing what tools I use to make software?</Heading>

					<Text>
						A list of tools I use on a daily basis to make beautiful web applications and blazing fast
						back-ends!
					</Text>
				</TextContainer>
			</header>

			<section id="uses">
				<div className="flex flex-col gap-16">
					<Grid className="grid-cols-1 gap-4 md:grid-cols-4">
						<Heading element="h2" className="text-lg">
							<TextStyle variation="fancy">Workstation</TextStyle>
						</Heading>

						<Grid.Item className="md:col-span-3">
							<ul className="flex flex-col gap-16">
								<li>
									<TextContainer>
										<Heading element="h3">Custom-built Arch Linux computer</Heading>

										<Text>
											I have always been interested in software development, electronics and
											building my own computer. In July 2019, I built my own PC with the following
											specs:
										</Text>

										<ul>
											<li>AMD Ryzen 7 3700X</li>
											<li>Nvidia GeForce RTX 2060 VENTUS 6G OC</li>
											<li>Asus Prime X470-Pro</li>
											<li>Corsair DDR4 Vengeance LPX 16GB</li>
											<li>Samsung 970 Pro 512GB</li>
											<li>Be Quiet! Dark Rock Pro 4</li>
											<li>Corsair RM750x PSU</li>
											<li>Fractal Design Meshify C</li>
										</ul>
									</TextContainer>
								</li>

								<li>
									<TextContainer>
										<Heading element="h3">15" MacBook Pro, 6-core i7, 16GB RAM (2019)</Heading>

										<Text>
											Whenever I am not working from the comfort of my own home, this beast of a
											machine helps me with downloading my{" "}
											<span className="rounded bg-slate-100 p-1">node_modules</span>.
										</Text>
									</TextContainer>
								</li>
							</ul>
						</Grid.Item>
					</Grid>

					<Grid className="grid-cols-1 gap-4 md:grid-cols-4">
						<Heading element="h2" className="text-lg">
							<TextStyle variation="fancy">Peripherals</TextStyle>
						</Heading>

						<Grid.Item className="md:col-span-3">
							<ul className="flex flex-col gap-16">
								<li>
									<TextContainer>
										<Heading element="h3">Vortex RACE 3 RGB (ANSI) Keyboard</Heading>

										<Text>
											Can you really call yourself a developer if your mechanical keyboard does
											not make clicky-clacky sounds and does not light up in the dark? This
											keyboard is built like a tank and has served me well for the past 3 years. I
											personally use Cherry MX brown switches.
										</Text>
									</TextContainer>
								</li>

								<li>
									<TextContainer>
										<Heading element="h3">Herman Miller Mirra 2 Chair</Heading>

										<Text>
											As someone struggling with subarticular disc bulging on L3 - L5, having a
											high-quality chair and a height-adjustable desk is a must. It is by far the
											best investment I have made.
										</Text>
									</TextContainer>
								</li>

								<li>
									<TextContainer>
										<Heading element="h3">Edifier R1280T Speakers</Heading>

										<Text>
											Some very high-quality bookshelf speakers to blast techno while I fix bugs
											that I personally introduced a couple of months ago.
										</Text>
									</TextContainer>
								</li>
							</ul>
						</Grid.Item>
					</Grid>

					<Grid className="grid-cols-1 gap-4 md:grid-cols-4">
						<Heading element="h2" className="text-lg">
							<TextStyle variation="fancy">Development Tools</TextStyle>
						</Heading>

						<Grid.Item className="md:col-span-3">
							<ul>
								<li>
									<TextContainer>
										<Heading element="h3">VSCode</Heading>

										<Text>
											My preferred code editor, customised with with Popping and Locking as my
											theme and Material Icon as my icon set, combined with some extensions to
											make my development life easier.
										</Text>
									</TextContainer>
								</li>
							</ul>
						</Grid.Item>
					</Grid>
				</div>
			</section>
		</div>
	);
};

export default Uses;
