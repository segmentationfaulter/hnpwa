import { FeedItem } from "../Schema";

export function SubTitle(props: FeedItem) {
  return (
    <div className="space-x-1 text-xs">
      <span className="opacity-75">{props.points} points by</span>
      <span className="font-medium">{props.user}</span>
      <span className="opacity-75">{props.time_ago} |</span>
      <span className="font-medium">{props.comments_count} comments</span>
    </div>
  );
}
