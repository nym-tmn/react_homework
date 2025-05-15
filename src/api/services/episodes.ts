import { instance } from "@api";
import type { ResponseType, EpisodesType } from "@types";

export const getEpisodes = async (currentPage: number) => {
	const response = await instance.get<ResponseType<EpisodesType>>(`episode?page=${currentPage}`);
	const data = response.data;
	return data;
}