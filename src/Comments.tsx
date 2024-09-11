import { stripHtml } from "string-strip-html";
import { Item } from "./Schema";
import clsx from "clsx";

const levelPaddingMap = {
  0: "pl-0",
  1: "pl-1",
  2: "pl-2",
  3: "pl-3",
  4: "pl-4",
  5: "pl-5",
  6: "pl-6",
  7: "pl-7",
  8: "pl-8",
  9: "pl-9",
  10: "pl-10",
};

export function Comments({ comments }: { comments: Item[] }) {
  return comments.map((comment) => (
    <div
      key={comment.id}
      className={clsx(levelPaddingMap[comment.level], {
        "border-l-4": comment.level > 0,
      })}
    >
      {stripHtml(comment.content).result}
      {comment.comments.length > 0 ? (
        <Comments comments={comment.comments} />
      ) : null}
    </div>
  ));
}
