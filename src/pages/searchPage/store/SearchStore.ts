import React from "react";
import { makeAutoObservable } from "mobx";
import { IBooksArray } from "../../../models/Book";
import { getBooks } from "../../../services/BooksAPI";

class SearchStore {
  booksArray: IBooksArray = {
    books: [],
    totalItems: 0,
  };
  searchField: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  setSearchField(text: string) {
    if (text !== this.searchField) {
      this.searchField = text;
    }
  }

  setBooks(books: IBooksArray) {
    this.booksArray = books;
  }

  async fetchBooks() {
    if (this.searchField) {
      const data = await getBooks(this.searchField);
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
