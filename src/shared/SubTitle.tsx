import { Link, useHref, useLocation, useMatches } from "react-router-dom";
import { FeedItem } from "../Schema";

export function SubTitle(props: FeedItem) {
  return (
    <div className="space-x-1 text-xs">
      <span className="opacity-75">{props.points} points by</span>
      <Link to={`/user/${props.user}`} className="font-medium">
        {props.user}
      </Link>
      <span className="opacity-75">{props.time_ago} |</span>
      <Link className="font-medium" to={`/item/${props.id}`}>
        {props.comments_count} comments
      </Link>
    </div>
  );
}
