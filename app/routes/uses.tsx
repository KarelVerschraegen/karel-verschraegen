import { Grid, Heading, Text, TextStyle } from "~/ui";

const Uses = () => {
	return (
		<div className="flex flex-col gap-16">
			<header>
				<div className="prose prose-slate">
					<Heading element="h1">Interesting in knowing what tools I use to make software?</Heading>

					<Text>
						A list of some of the tools I use on a daily basis to make beautiful applications and blazing
						fast back-ends!
					</Text>
				</div>
			</header>

			<section id="uses">
				<div className="flex flex-col gap-16">
					<Grid className="grid-cols-1 gap-4 md:grid-cols-4">
						<Heading element="h2" className="!text-lg">
							<TextStyle variation="fancy">Workstation</TextStyle>
						</Heading>

						<Grid.Item className="md:col-span-3">
							<ul className="flex flex-col gap-16">
								<li>
									<div className="prose prose-slate">
										<Heading element="h3">Custom-built Arch Linux</Heading>

										<Text>
											I have always been interested in electronics and building my own computer.
											In July 2019, I built my own PC with the following specs:
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
									</div>
								</li>

								<li>
									<div className="prose prose-slate">
										<Heading element="h3">15" MacBook Pro, 6-core i7, 16GB RAM (2019)</Heading>

										<Text>My laptop when I am not working from home</Text>
									</div>
								</li>
							</ul>
						</Grid.Item>
					</Grid>

					<Grid className="grid-cols-1 gap-4 md:grid-cols-4">
						<Heading element="h2" className="!text-lg">
							<TextStyle variation="fancy">Peripherals</TextStyle>
						</Heading>

						<Grid.Item className="md:col-span-3">
							<ul className="flex flex-col gap-16">
								<li>
									<div className="prose prose-slate">
										<Heading element="h3">Vortex RACE 3 RGB (ANSI) Keyboard</Heading>

										<Text>
											Can you really call yourself a developer if your keyboard does not make
											clicky-clacky sounds and does not light up in the dark?
										</Text>
									</div>
								</li>

								<li>
									<div className="prose prose-slate">
										<Heading element="h3">Herman Miller Mirra 2 Chair</Heading>

										<Text>
											As someone struggling with subarticular disc bulging on L3 - L5, having a
											proper desk setup and chair is a must
										</Text>
									</div>
								</li>

								<li>
									<div className="prose prose-slate">
										<Heading element="h3">Edifier R1280T Speakers</Heading>

										<Text>Some proper speakers</Text>
									</div>
								</li>
							</ul>
						</Grid.Item>
					</Grid>

					<Grid className="grid-cols-1 gap-4 md:grid-cols-4">
						<Heading element="h2" className="!text-lg">
							<TextStyle variation="fancy">Development Tools</TextStyle>
						</Heading>

						<Grid.Item className="md:col-span-3">
							<ul>
								<li>
									<div className="prose prose-slate">
										<Heading element="h3">VSCode</Heading>

										<Text>
											My preferred editor, with Popping and Locking as theme and Material Icon as
											icon set combined with some extensions to make my development life easier
										</Text>
									</div>
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
