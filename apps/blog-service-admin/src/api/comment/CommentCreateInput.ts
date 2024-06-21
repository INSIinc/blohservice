import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentCreateInput = {
  post?: PostWhereUniqueInput | null;
  text?: string | null;
};
