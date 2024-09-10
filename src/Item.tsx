import useSWR from "swr";
import type { Item } from "./Schema";
import { API_URLS } from "./urls";
import { fetcher } from "./utils/fetcher";
import { SubTitle } from "./components/SubTitle";

export function Item({ id }: Pick<Item, "id">) {
  const { data } = useSWR(API_URLS.ITEM(id), fetcher<Item>, {
    suspense: true,
  });

  return (
    <>
      <h1 className="text-2xl">{data.title}</h1>
      <SubTitle {...data} />
      <div
        className="text-sm"
        dangerouslySetInnerHTML={{ __html: data.content }}
      ></div>
      <div>
        <p>Comments start here</p>
      </div>
    </>
  );
}
