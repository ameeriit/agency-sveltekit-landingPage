export interface Card {
	title: string;
	content: string;
	img: string;
}

export interface Article {
	title: string;
	titleImage: string;
	content: string[];
	contentImage: string;
}

export interface BoxCardType {
	imageUrl: string;
	tags: string[];
	title: string;
	description: string;
	author: {
		avatarUrl: string;
		name: string;
		role: string;
	}[];
	extendClass: string;
	href: string;
}

export interface NavLink {
	navText?: string;
	id?: string;
}
