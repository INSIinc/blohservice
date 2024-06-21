import { PostCreateNestedManyWithoutAuthorsInput } from "./PostCreateNestedManyWithoutAuthorsInput";

export type AuthorCreateInput = {
  name?: string | null;
  posts?: PostCreateNestedManyWithoutAuthorsInput;
};
