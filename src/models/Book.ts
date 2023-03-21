export type Book = {
  id: string;
  img?: {
    img_small?: string;
    img_big?: string;
  };
  categories?: Array<string>;
  title: string;
  authors: Array<string>;
  description: string;
};

export interface IBooksArray {
  books: Book[];
  totalItems: number;
}
