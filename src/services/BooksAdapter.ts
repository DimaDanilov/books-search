import { Book } from "../models/Book";

export class BooksAdapter {
  static transform(data: any): Book[] {
    return data.map(
      (item: any) =>
        ({
          id: item.id,
          img: {
            img_small: item.volumeInfo.imageLinks?.smallThumbnail,
            img_big: item.volumeInfo.imageLinks?.thumbnail,
          },
          categories: item.volumeInfo.categories,
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors,
          description: item.volumeInfo.description,
        } as Book)
    );
  }
}
