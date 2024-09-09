import useSWR, { Fetcher } from "swr";
import { useState } from "react";
import { FeedItem as FeedItemComponent } from "./FeedItem";
import { Item } from "./Item";
import type { FeedItem } from "./Schema";
import { API_URLS } from "./urls";

const fetcher: Fetcher<FeedItem[], string> = (url) =>
  window.fetch(url).then((res) => res.json());

export function TopStories() {
  const [currentPage, setCurrentPage] = useState<"main" | "comments">("main");
  const { data } = useSWR(API_URLS.NEWS, fetcher, { suspense: true });

  const handleCommentsClick = () => setCurrentPage("comments");

  if (currentPage === "comments") {
    return <Item />;
  }

  return data.map((story, index) => (
    <FeedItemComponent
      key={story.id}
      index={index}
      onCommentsClick={handleCommentsClick}
      {...story}
    />
  ));
}
