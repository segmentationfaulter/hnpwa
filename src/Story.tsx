export type Story = {
  id: number;
  title: string;
  domain: string;
  points: number;
  time_ago: string;
  user: string;
  comments_count: number;
};

export function Story(
  props: Story & {
    index: number;
    onCommentsClick: React.MouseEventHandler;
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
        <div className="space-x-1 text-xs">
          <span className="opacity-75">{props.points} points by</span>
          <span className="font-medium">{props.user}</span>
          <span className="opacity-75">{props.time_ago} |</span>
          <span className="font-medium cursor-pointer" onClick={props.onCommentsClick}>
            {props.comments_count} comments
          </span>
        </div>
      </div>
    </div>
  );
}
