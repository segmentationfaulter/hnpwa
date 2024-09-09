import useSWR, { Fetcher } from "swr";
import { Story, Story as StoryComponent } from "./Story";
import { API_URLS } from "./urls";
import { useState } from "react";
import { Comments } from "./Comments";

const fetcher: Fetcher<Story[], string> = (url) =>
  window.fetch(url).then((res) => res.json());

export function TopStories() {
  const [currentPage, setCurrentPage] = useState<"main" | "comments">("main");
  const { data } = useSWR(API_URLS.NEWS, fetcher, { suspense: true });

  const handleCommentsClick = () => setCurrentPage("comments");

  if (currentPage === "comments") {
    return <Comments />;
  }

  return data.map((story, index) => (
    <StoryComponent
      key={story.id}
      index={index}
      onCommentsClick={handleCommentsClick}
      {...story}
    />
  ));
}
