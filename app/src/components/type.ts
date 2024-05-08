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
	recommendations?: Recommendations[];
	project?: Project[];
}

export interface Experience {
	company?: string;
	position?: string;
	duration?: string;
	location: string;
	summary?: string;
	responsibilities?: string[];
	imageURL?: string;
	skillsUsed?: string[];
}

export interface Recommendations {
	from?: string;
	designation?: string;
	praise?: string;
	profile?: string;
}

export interface Project {
	id: string;
	pName: string;
	description?: string;
	imageUrl?: string;
	responsibilities?: string[];
}
