export interface UserDetails {
	name: string;
	designation: string;
	role: string;
	currentOrg: string;
	email: string;
	location: string;
	area: string;
	tagline: string;
	images: string[];
	skills: string[];
	summary?: string;
	honors_awards?: string[];
	experience?: Experience[];
}

export interface Experience {
	company?: string;
	position?: string;
	duration?: string;
	location: string;
	summary?: string;
	responsibilities?: string[];
	imageURL?: string;
}
