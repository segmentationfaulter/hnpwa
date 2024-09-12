const BASE_URL = "https://api.hnpwa.com/v0";

function generateApiUrl(endpoint: string) {
  return `${BASE_URL}${endpoint}`;
}

export type FeedType = Exclude<keyof typeof API_URLS, "item">;

export const API_URLS = {
  news: generateApiUrl("/news/1.json"),
  newest: generateApiUrl("/newest/1.json"),
  ask: generateApiUrl("/ask/1.json"),
  show: generateApiUrl("/show/1.json"),
  jobs: generateApiUrl("/jobs/1.json"),
  item: (id: number) => generateApiUrl(`/item/${id}.json`),
} as const;

export function isValidFeedType(feedType: string) {
  const validFeedTypes = Object.keys(API_URLS).filter(
    (type) => type !== "item",
  );
  return validFeedTypes.includes(feedType);
}
