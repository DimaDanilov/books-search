import React from "react";
import { makeAutoObservable } from "mobx";
import { Book, IBooksArray } from "../../../models/Book";
import { getBooks } from "../../../services/BooksAPI";
import { Sort } from "../../../models/Sort";
import { Categories } from "../../../models/Categories";
import { PageSettings } from "../../../models/PageSettings";
import { LoadingQueryStatus } from "../../../models/LoadingQueryStatus";

class SearchStore {
  booksArray: IBooksArray = {
    books: [],
    totalItems: 0,
  };
  nextBooksArray: IBooksArray = {
    books: [],
    totalItems: 0,
  };
  searchField: string = "";
  sortType: Sort = Sort["relevance"];
  category: Categories = Categories["all"];
  queryParamsLoadStatus: LoadingQueryStatus = {
    search: false,
    sortType: false,
    category: false,
  };

  currentstartIndex: number = 0; // First book for pagination stack
  PAGINATION_STACK: number = 30;

  constructor() {
    makeAutoObservable(this);
  }

  setPageSettings(settings: PageSettings) {
    switch (settings.type) {
      case "search":
        if (settings.value && settings.value !== this.searchField) {
          if (settings.value !== this.searchField) {
            this.searchField = settings.value;
          } else {
            return;
          }
        }
        this.queryParamsLoadStatus.search = true;
        break;
      case "sort":
        if (settings.value !== this.sortType && settings.value !== undefined) {
          this.sortType = settings.value;
        }
        this.queryParamsLoadStatus.sortType = true;
        break;
      case "category":
        if (this.category !== settings.value && settings.value !== undefined) {
          this.category = settings.value;
        }
        this.queryParamsLoadStatus.category = true;
        break;
    }
    this.updateStartIndex(0, "set");
  }

  updateBooks(books: IBooksArray, todo: "set" | "add") {
    if (todo === "set") {
      this.booksArray = books;
    } else if (todo === "add") {
      if (books.books.length !== 0) {
        // Add only new books
        books.books.forEach((book) => {
          this.booksArray.books.findIndex(
            (addedBook: Book) => addedBook.id === book.id
          ) === -1 && this.booksArray.books.push(book);
        });
        this.booksArray.totalItems = books.totalItems;
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

  async setBooks() {
    if (
      this.searchField &&
      Object.values(this.queryParamsLoadStatus).every(Boolean) // All query params loaded
    ) {
      this.updateStartIndex(0, "set");
      const data = await getBooks(
        this.searchField,
        this.sortType,
        this.category,
        this.currentstartIndex,
        this.PAGINATION_STACK
      );
      this.updateBooks(data, "set");
      this.updateStartIndex(this.PAGINATION_STACK, "add");
      if (this.booksArray.books.length !== 0) {
        const nextBookData = await getBooks(
          this.searchField,
          this.sortType,
          this.category,
          this.currentstartIndex,
          this.PAGINATION_STACK
        );
        this.nextBooksArray = nextBookData;
      }
    }
  }

  async addBooks() {
    if (this.searchField) {
      this.updateBooks(this.nextBooksArray, "add");
      this.updateStartIndex(this.PAGINATION_STACK, "add");
      const data = await getBooks(
        this.searchField,
        this.sortType,
        this.category,
        this.currentstartIndex,
        this.PAGINATION_STACK
      );
      this.nextBooksArray = data;
    }
  }
}

export const SearchStoreInstance = new SearchStore();
const SearchStoreContext = React.createContext(SearchStoreInstance);

export const useSearchStore = () => {
  return React.useContext(SearchStoreContext);
};

export default new SearchStore();
