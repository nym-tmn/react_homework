import { instance } from "@api";
import type { ResponseType, LocationsType } from "@types";

export const getLocations = async (currentPage: number) => {
	const response = await instance.get<ResponseType<LocationsType>>(`location?page=${currentPage}`);
	const data = response.data;
	return data;
}