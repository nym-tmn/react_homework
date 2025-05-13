export type ResponseCharactersType = {
	info: CharactersInfoType;
	results: CharactersType;
}

interface CharactersInfoType {
	count: number;
	next: string | null;
	pages: number;
	prev: string | null;
}

export type CharactersType = Array<CharacterType>;

export interface CharacterType {
	created: string;
	episode: Array<string>;
	gender: string;
	id: number;
	image: string;
	location: LocationType;
	name: string;
	origin: LocationType;
	species: string;
	status: string;
	type: string;
	url: string;
}

interface LocationType {
	name: string;
	url: string;
}