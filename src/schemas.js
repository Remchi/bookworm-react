import { schema } from "normalizr";

export const bookSchema = new schema.Entity(
  "books",
  {},
  { idAttribute: "_id" }
);
