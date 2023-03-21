import axios from "axios";
import { Book, IBooksArray } from "../models/Book";
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

export const getBooks = async (searchQuery: string): Promise<IBooksArray> => {
  return axios
    .get(`${BASE_URL}/volumes?q=${searchQuery}&key=${API_KEY}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((response) => {
      return {
        books: response.data.items
          ? BooksAdapter.parseBooks(response.data.items)
          : [],
        totalItems: response.data.totalItems,
      };
    });
};
