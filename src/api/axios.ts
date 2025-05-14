import axios from "axios";

if (!import.meta.env.VITE_API_BASE_URL) {
	throw new Error('VITE_API_BASE_URL is not defined in .env');
}

export const instance = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL
})