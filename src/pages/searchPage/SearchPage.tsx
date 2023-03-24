import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Categories } from "../../models/Categories";
import { Sort } from "../../models/Sort";
import { BooksListModule } from "./modules/BooksListModule";
import { SearchModule } from "./modules/SearchModule";
import { useSearchStore } from "./store/SearchStore";

export const SearchPage = () => {
  const searchStore = useSearchStore();

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");
  const sortQuery = searchParams.get("sort");
  const categoryQuery = searchParams.get("category");

  useEffect(() => {
    searchStore.setPageQueryParams({ type: "search", value: searchQuery });
    searchStore.loadBooks("set");
  }, [searchStore, searchQuery]);

  useEffect(() => {
    searchStore.setPageQueryParams({
      type: "sort",
      value: Sort[sortQuery as keyof typeof Sort],
    });
    searchStore.loadBooks("set");
  }, [searchStore, sortQuery]);

  useEffect(() => {
    searchStore.setPageQueryParams({
      type: "category",
      value: Categories[categoryQuery as keyof typeof Categories],
    });
    searchStore.loadBooks("set");
  }, [searchStore, categoryQuery]);

  return (
    <>
      <SearchModule />
      <BooksListModule />
    </>
  );
};
