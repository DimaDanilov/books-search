import { Book } from "../models/Book";

export class BooksAdapter {
  static parseBook(item: any): Book {
    return {
      id: item.id,
      img: {
        img_small: item.volumeInfo.imageLinks?.smallThumbnail,
        img_big: item.volumeInfo.imageLinks?.thumbnail,
      },
      categories: item.volumeInfo.categories,
      title: item.volumeInfo.title,
      authors: item.volumeInfo.authors,
      description: item.volumeInfo.description,
    };
  }
  static parseBooks(books: any): Book[] {
    return books.map((item: any) => this.parseBook(item));
  }
}
