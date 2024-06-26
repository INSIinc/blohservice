import { Post } from "../post/Post";

export type Author = {
  createdAt: Date;
  id: string;
  name: string | null;
  posts?: Array<Post>;
  updatedAt: Date;
};
