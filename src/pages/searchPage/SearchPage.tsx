import { BooksListModule } from "./modules/BooksListModule";
import { SearchModule } from "./modules/SearchModule";

export const SearchPage = () => {
  return (
    <>
      <SearchModule />
      <BooksListModule />
    </>
  );
};
