import type { ResourceBase } from "./common";

export type CharactersType = Array<CharacterType>;

export interface CharacterType extends ResourceBase {
	status: 'Dead' | 'Alive' | 'unknown'
	species: string
	type: string
	gender: 'Female' | 'Male' | 'Genderless' | 'unknown'
	origin: LocationType
	location: LocationType
	image: string
	episode: string[]
}

interface LocationType {
	name: string;
	url: string;
}