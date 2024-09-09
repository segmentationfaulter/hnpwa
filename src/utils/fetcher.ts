export const fetcher = <T>(url: string): Promise<T> => {
	return window.fetch(url).then((res) => res.json());
}
