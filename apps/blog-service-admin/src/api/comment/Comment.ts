import { Post } from "../post/Post";

export type Comment = {
  createdAt: Date;
  id: string;
  post?: Post | null;
  text: string | null;
  updatedAt: Date;
};
