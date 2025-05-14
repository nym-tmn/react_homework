import axios from "axios";
import type { ResponseCharactersType } from "@types";

const instance = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL
})

export const getCharacters = async (currentPage: number) => {
	const response = await instance.get<ResponseCharactersType>(`character/?page=${currentPage}`);
	const data = response.data;
	return data;
}