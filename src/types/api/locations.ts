import type { ResourceBase } from "./common";

export type LocationsType = Array<LocationType>;

export interface LocationType extends ResourceBase {
	type: string
	dimension: string
	residents: string[]
}