import { SubTitle } from "./components/SubTitle";
import type { FeedItem } from "./Schema";

export function FeedItem(
  props: FeedItem & {
    index: number;
    onCommentsClick: (id: number) => void;
  }
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
