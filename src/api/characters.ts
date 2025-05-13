import type { ResponseCharactersType } from "@types";
import axios from "axios";

const instance = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL
})

export const getCharacters = async () => {
	const response = await instance.get<ResponseCharactersType>('character');
	const data = response.data.results;
	return data;
}
