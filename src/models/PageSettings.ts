import { Categories } from "./Categories";
import { Sort } from "./Sort";

export type PageSettings =
  | {
      type: "search";
      value: string | null;
    }
  | {
      type: "sort";
      value: Sort;
    }
  | {
      type: "category";
      value: Categories;
    };
