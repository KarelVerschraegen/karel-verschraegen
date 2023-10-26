import type { IconName } from "../@types/icon";

interface Social {
	url: string;
	name: string;
	logo: IconName;
}

export const SOCIALS: Array<Social> = [
	{
		url: "https://github.com/KarelVerschraegen",
		name: "GitHub",
		logo: "github",
	},
	{
		url: "https://twitter.com/karelverschrae",
		name: "Twitter",
		logo: "twitter",
	},
	{
		url: "https://www.linkedin.com/in/karel-verschraegen",
		name: "LinkedIn",
		logo: "linkedin",
	},
	{
		url: "https://www.instagram.com/karelverschraegen",
		name: "Instagram",
		logo: "instagram",
	},
	{
		url: "mailto:karelverschraegenbiz@gmail.com",
		name: "Email",
		logo: "mail",
	},
];
