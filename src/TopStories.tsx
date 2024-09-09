import useSWR, { Fetcher } from "swr";
import { Suspense, useState } from "react";
import { FeedItem as FeedItemComponent } from "./FeedItem";
import { Item } from "./Item";
import type { FeedItem } from "./Schema";
import { API_URLS } from "./urls";
import { fetcher } from "./utils/fetcher";

export function TopStories() {
  const [selectedItem, setSelectedItem] = useState<number>();
  const { data } = useSWR(API_URLS.NEWS, fetcher<FeedItem[]>, {
    suspense: true,
  });

  const handleCommentsClick = (id: number) => setSelectedItem(id);

  if (selectedItem) {
    return (
      <Suspense fallback={<p>Loading...</p>}>
        <Item id={selectedItem} />
      </Suspense>
    );
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
