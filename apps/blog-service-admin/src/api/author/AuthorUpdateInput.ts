import { PostUpdateManyWithoutAuthorsInput } from "./PostUpdateManyWithoutAuthorsInput";

export type AuthorUpdateInput = {
  name?: string | null;
  posts?: PostUpdateManyWithoutAuthorsInput;
};
