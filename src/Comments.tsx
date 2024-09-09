export type Comments = {
  comments: Comments[];
  comments_count: number;
  content: string;
  id: number;
  level: number;
  time: number;
  time_ago: string;
  type: string;
  url: string;
  user: string;
};

export function Comments() {
  return <p>We are at comments page</p>;
}
