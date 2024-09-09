const BASE_URL = "https://api.hnpwa.com/v0";

function generateApiUrl(endpoint: string) {
  return `${BASE_URL}${endpoint}`;
}

export const API_URLS = {
  NEWS: generateApiUrl("/news/1.json"),
  NEWEST: generateApiUrl("/newest/1.json"),
  ASK: generateApiUrl("/ask/1.json"),
  SHOW: generateApiUrl("/show/1.json"),
  JOBS: generateApiUrl("/jobs/1.json"),
  ITEM: (id: number) => generateApiUrl(`/item/${id}.json`),
};
