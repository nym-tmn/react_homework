import { instance } from "@api";
import type { CharactersType, ResponseType } from "@types";

export const getCharacters = async (currentPage: number) => {
	const response = await instance.get<ResponseType<CharactersType>>(`character/?page=${currentPage}`);
	const data = response.data;
	return data;
}