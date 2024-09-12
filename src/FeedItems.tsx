import useSWR from "swr";
import type { FeedItem } from "./Schema";
import { API_URLS } from "./urls";
import { fetcher } from "./utils/fetcher";
import { SubTitle } from "./components/SubTitle";

export function FeedItems() {
  const { data } = useSWR(API_URLS.NEWS, fetcher<FeedItem[]>, {
    suspense: true,
  });

  return data.map((item, index) => (
    <FeedItem key={item.id} index={index} {...item} />
  ));
}

function FeedItem(
  props: FeedItem & {
    index: number;
  },
) {
  return (
    <div className="flex items-center gap-5">
      <div className="max-w-4">{props.index}</div>
      <div>
        <div className="space-x-1">
          <span>{props.title}</span>
          <span className="text-xs opacity-75">{props.domain}</span>
        </div>
        <SubTitle {...props} />
      </div>
    </div>
  );
}
