import React from "react";
import { makeAutoObservable } from "mobx";
import { IBooksArray } from "../../../models/Book";
import { getBooks } from "../../../services/BooksAPI";
import { Sort } from "../../../models/Sort";
import { Categories } from "../../../models/Categories";

class SearchStore {
  booksArray: IBooksArray = {
    books: [],
    totalItems: 0,
  };
  searchField: string = "";
  sortType: Sort = Sort["relevance"];
  category: Categories = Categories["all"];

  constructor() {
    makeAutoObservable(this);
  }

  setSearchField(text: string) {
    if (text !== this.searchField) {
      this.searchField = text;
    }
  }

  setSortType(type: Sort) {
    this.sortType = type;
  }

  setCategory(category: Categories) {
    this.category = category;
  }

  setBooks(books: IBooksArray) {
    this.booksArray = books;
  }

  async fetchBooks() {
    if (this.searchField) {
      const data = await getBooks(
        this.searchField,
        this.sortType,
        this.category
      );
      this.setBooks(data);
    }
  }
}

export const SearchStoreInstance = new SearchStore();
const SearchStoreContext = React.createContext(SearchStoreInstance);

export const useSearchStore = () => {
  return React.useContext(SearchStoreContext);
};

export default new SearchStore();
