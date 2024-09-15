import { Item } from "../Schema";
import clsx from "clsx";

export function Comments({ comments }: { comments: Item[] }) {
  return comments.map((comment) => (
    <div
      key={comment.id}
      className={clsx("pl-2", "max-w-fit", "break-words", {
        "border-l-4": comment.level > 0,
      })}
    >
      <div dangerouslySetInnerHTML={{ __html: comment.content }} />
      {comment.comments.length > 0 ? (
        <Comments comments={comment.comments} />
      ) : null}
    </div>
  ));
}
