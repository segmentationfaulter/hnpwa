import useSWR from "swr";
import type { User } from "../Schema.js";
import { API_URLS } from "../utils/urls";
import { fetcher } from "../utils/fetcher";
import { useParams } from "react-router-dom";
import { NotFound } from "./NotFound";

export function User() {
  const { username } = useParams();

  if (!username) {
    return <NotFound />;
  }

  const { data } = useSWR(API_URLS.user(username), fetcher<User>, {
    suspense: true,
  });

  return (
    <>
      <p>{`User: ${data.id}`}</p>
      <p>{`Created: ${data.created}`}</p>
      <p>{`Karma: ${data.karma}`}</p>
      <p>{`About:`}</p>
      {data.about && (
        <div dangerouslySetInnerHTML={{ __html: data.about }}></div>
      )}
    </>
  );
}
