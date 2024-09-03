import { Story, StoryProps } from "./Story";

export function TopStories() {
  const props: StoryProps = {
    id: 1,
    title: "Rust Maintainer for Linux Kernel Resigns",
    domain: "ostechnix.com",
    points: 78,
    user: "muhammad_saqib",
    time_ago: "an hour ago",
    commentsCount: 20,
  };

  return <Story index={1} {...props} />;
}
