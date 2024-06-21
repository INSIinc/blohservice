import { StringFilter } from "../../util/StringFilter";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CommentWhereInput = {
  id?: StringFilter;
  post?: PostWhereUniqueInput;
  text?: StringNullableFilter;
};
