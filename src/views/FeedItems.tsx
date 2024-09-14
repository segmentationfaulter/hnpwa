import useSWR from "swr";
import type { FeedItem } from "../Schema";
import { API_URLS, FeedType, isValidFeedType } from "../utils/urls";
import { fetcher } from "../utils/fetcher";
import { SubTitle } from "../shared/SubTitle";
import { useParams } from "react-router-dom";
import { NotFound } from "./NotFound";

export function FeedItems() {
  const { feedType } = useParams<{ feedType: FeedType }>();

  if (feedType && !isValidFeedType(feedType)) {
    return <NotFound />;
  }

  const { data } = useSWR(
    feedType ? API_URLS[feedType] : API_URLS["news"],
    fetcher<FeedItem[]>,
    {
      suspense: true,
    },
  );

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
          <a href={`${props.url}`} target="_blank">
            {props.title}
          </a>
          <span className="text-xs opacity-75">{props.domain}</span>
        </div>
        <SubTitle {...props} />
      </div>
    </div>
  );
}
