import axios from "axios";
import { IBooksArray } from "../models/Book";
import { BooksAdapter } from "./BooksAdapter";

const BASE_URL = "https://www.googleapis.com/books/v1";
const API_KEY = "AIzaSyCNlACc5wWRR56aJSE_zMfY5pukFUKamJM";

export const getBooks = async (searchQuery: string): Promise<IBooksArray> => {
  return axios
    .get(`${BASE_URL}/volumes?q=${searchQuery}&key=${API_KEY}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((response) => {
      console.log(response);
      return {
        books: response.data.items
          ? BooksAdapter.transform(response.data.items)
          : [],
        totalItems: response.data.totalItems,
      };
    });
};
