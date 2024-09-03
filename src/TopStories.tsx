import useSWR, { Fetcher } from "swr";
import { Story, Story as StoryComponent } from "./Story";
import { API_URLS } from "./urls";

const fetcher: Fetcher<Story[], string> = (url) =>
  window.fetch(url).then((res) => res.json());

export function TopStories() {
  const { data } = useSWR(API_URLS.NEWS, fetcher, { suspense: true });

  return data.map((story, index) => (
    <StoryComponent key={story.id} index={index} {...story} />
  ));
}
