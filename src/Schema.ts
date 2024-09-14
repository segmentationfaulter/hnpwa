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
  level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  comments_count: number;
};

export type User = {
  about?: string;
  created_time: number;
  created: string;
  id: string;
  karma: number;
};
