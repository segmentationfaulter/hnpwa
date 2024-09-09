export type FeedItem = {
  id: number;
  title: string;
  points?: number;
  user?: string;
  time: number;
  time_ago: string;
  comments_count: number;
  type: string;
  url?: string;
  domain?: string;
};

export type Item = {
  id: number;
  title: string;
  points?: number;
  user?: string;
  time: number;
  time_ago: string;
  content: string;
  deleted?: boolean;
  dead?: boolean;
  type: string;
  url?: string;
  domain?: string;
  comments: Item[];
  level: number;
  comments_count: number;
};
