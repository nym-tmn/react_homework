export type ResponseCharactersType = {
	info: CharactersInfoType;
	results: CharactersType;
}

interface CharactersInfoType {
	count: number;
	pages: number;
	prev: string | null;
	next: string | null;
}

export type CharactersType = Array<CharacterType>;

export interface CharacterType {
	created: string;
	episode: Array<string>;
	gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
	id: number;
	image: string;
	location: LocationType;
	name: string;
	origin: LocationType;
	species: string;
	status: 'Dead' | 'Alive' | 'unknown';
	type: string;
	url: string;
}

interface LocationType {
	name: string;
	url: string;
}