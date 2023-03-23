import React from "react";
import { makeAutoObservable } from "mobx";
import { Book, IBooksArray } from "../../../models/Book";
import { getBooks } from "../../../services/BooksAPI";
import { Sort } from "../../../models/Sort";
import { Categories } from "../../../models/Categories";
import { PageSettings } from "../../../models/PageSettings";

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
        break;
      case "sort":
        if (settings.value !== this.sortType) {
          this.sortType = settings.value;
        }
        break;
      case "category":
        if (this.category !== settings.value) {
          this.category = settings.value;
        }
        break;
    }
    this.updateStartIndex(0, "set");
    this.morePagesToShow = true;
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

  async setBooks() {
    if (this.searchField) {
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
    }
  }

  async addBooks() {
    if (this.searchField) {
      const data = await getBooks(
        this.searchField,
        this.sortType,
        this.category,
        this.currentstartIndex,
        this.PAGINATION_STACK
      );
      this.updateBooks(data, "add");
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
