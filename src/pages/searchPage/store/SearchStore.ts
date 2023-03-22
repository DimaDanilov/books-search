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
  currentstartIndex: number = 0; // First book for pagination stack
  PAGINATION_STACK: number = 30;
  morePagesToShow: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  setSearchField(text: string) {
    if (text !== this.searchField) {
      this.searchField = text;
      this.updateStartIndex(0, "set");
      this.morePagesToShow = true;
    }
  }

  setSortType(type: Sort) {
    this.sortType = type;
    this.updateStartIndex(0, "set");
    this.morePagesToShow = true;
  }

  setCategory(category: Categories) {
    this.category = category;
    this.updateStartIndex(0, "set");
    this.morePagesToShow = true;
  }

  updateBooks(books: IBooksArray, todo: "set" | "add") {
    if (todo === "set") {
      this.booksArray = books;
    } else if (todo === "add") {
      if (books.books.length !== 0) {
        this.booksArray.books.push(...books.books);
        this.booksArray.totalItems += books.totalItems;
      } else {
        this.morePagesToShow = false;
      }
    }
  }

  updateStartIndex(index: number, todo: "set" | "add") {
    if (todo === "set") {
      this.currentstartIndex = index;
    } else if (todo === "add") {
      this.currentstartIndex += index;
    }
  }

  async fetchBooks(todoBooks: "set" | "add") {
    if (this.searchField) {
      const data = await getBooks(
        this.searchField,
        this.sortType,
        this.category,
        this.currentstartIndex,
        this.PAGINATION_STACK
      );
      this.updateBooks(data, todoBooks);
      this.updateStartIndex(this.PAGINATION_STACK, "add");
    }
  }
}

export const SearchStoreInstance = new SearchStore();
const SearchStoreContext = React.createContext(SearchStoreInstance);

export const useSearchStore = () => {
  return React.useContext(SearchStoreContext);
};

export default new SearchStore();
