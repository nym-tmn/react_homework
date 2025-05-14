export type ResponseType<T> = {
	info: ResponseInfoType;
	results: T;
}

export interface ResourceBase {
	id: number
	name: string
	url: string
	created: string
}

export interface ResponseInfoType {
	count: number;
	pages: number;
	prev: string | null;
	next: string | null;
}