import axios from "axios";
import { Book, IBooksArray } from "../models/Book";
import { Categories } from "../models/Categories";
import { Sort } from "../models/Sort";
import { BooksAdapter } from "./BooksAdapter";

const BASE_URL = "https://www.googleapis.com/books/v1";
const API_KEY = "AIzaSyCNlACc5wWRR56aJSE_zMfY5pukFUKamJM";

export const getBook = async (id: string): Promise<Book> => {
  return axios
    .get(`${BASE_URL}/volumes/${id}?key=${API_KEY}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((response) => {
      return BooksAdapter.parseBook(response.data);
    });
};

export const getBooks = async (
  searchQuery: string,
  sortType: Sort,
  category: Categories,
  startIndex: number,
  stackSize: number
): Promise<IBooksArray> => {
  const categories = category !== 0 ? `+subject:${Categories[category]}` : "";
  return axios
    .get(
      `${BASE_URL}/volumes?q=${
        searchQuery.replace(" ", "+") + categories
      }&orderBy=${
        Sort[sortType]
      }&startIndex=${startIndex}&maxResults=${stackSize}&key=${API_KEY}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    .then((response) => {
      return {
        books: response.data.items
          ? BooksAdapter.parseBooks(response.data.items)
          : [],
        totalItems: response.data.totalItems,
      };
    });
};
