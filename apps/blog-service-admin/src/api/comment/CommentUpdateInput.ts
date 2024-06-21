import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentUpdateInput = {
  post?: PostWhereUniqueInput | null;
  text?: string | null;
};
