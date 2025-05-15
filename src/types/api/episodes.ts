import type { ResourceBase } from "./common";

export type EpisodesType = Array<EpisodeType>;

export interface EpisodeType extends ResourceBase {
	air_date: string;
	characters: Array<string>
	episode: string;
}