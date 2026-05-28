export type Member = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  online: boolean;
};

export const members: Member[] = [
  { id: 1, name: "Akira Hoshino", role: "Founder", avatar: "https://i.pravatar.cc/200?img=11", online: true },
  { id: 2, name: "Yuki Tanaka", role: "Moderator", avatar: "https://i.pravatar.cc/200?img=32", online: true },
  { id: 3, name: "Rei Sato", role: "Designer", avatar: "https://i.pravatar.cc/200?img=47", online: false },
  { id: 4, name: "Hana Mizuki", role: "Editor", avatar: "https://i.pravatar.cc/200?img=49", online: true },
  { id: 5, name: "Kenji Aoyama", role: "Event Lead", avatar: "https://i.pravatar.cc/200?img=15", online: false },
  { id: 6, name: "Miko Arata", role: "Member", avatar: "https://i.pravatar.cc/200?img=23", online: true }
];

export const gallery: { id: number; src: string; alt: string }[] = Array.from({ length: 8 }).map(
  (_, i) => ({
    id: i + 1,
    src: `https://picsum.photos/seed/anime-${i + 1}/600/600`,
    alt: `Anime aesthetic ${i + 1}`
  })
);

export type Post = {
  id: number;
  title: string;
  excerpt: string;
  thumbnail: string;
  date: string;
};

export const posts: Post[] = [
  {
    id: 1,
    title: "Top 10 Anime to Watch This Season",
    excerpt: "Our curated list of must-watch shows airing this season — from action to slice of life.",
    thumbnail: "https://picsum.photos/seed/post-1/800/500",
    date: "May 24, 2026"
  },
  {
    id: 2,
    title: "Community Meetup Recap",
    excerpt: "A look back at our latest meetup — cosplay, screenings, and unforgettable moments.",
    thumbnail: "https://picsum.photos/seed/post-2/800/500",
    date: "May 12, 2026"
  },
  {
    id: 3,
    title: "Beginner's Guide to Manga",
    excerpt: "New to manga? Here's where to start and how to find series you'll love.",
    thumbnail: "https://picsum.photos/seed/post-3/800/500",
    date: "Apr 30, 2026"
  }
];
