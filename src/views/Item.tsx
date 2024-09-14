import useSWR from "swr";
import type { Item } from "../Schema.js";
import { API_URLS } from "../utils/urls";
import { fetcher } from "../utils/fetcher";
import { SubTitle } from "../shared/SubTitle";
import { Comments } from "./Comments";
import { useParams } from "react-router-dom";
import { NotFound } from "./NotFound";

export function Item() {
  const { itemId } = useParams();

  if (!itemId) {
    return <NotFound />;
  }

  const { data } = useSWR(API_URLS.item(parseInt(itemId)), fetcher<Item>, {
    suspense: true,
  });

  return (
    <>
      <h1 className="text-2xl">{data.title}</h1>
      <SubTitle {...data} />
      <div
        className="text-sm pb-3 border-b-2"
        dangerouslySetInnerHTML={{ __html: data.content }}
      ></div>
      <div className="space-y-3">
        <Comments comments={data.comments} />
      </div>
    </>
  );
}
