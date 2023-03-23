export type Book = {
  id: string;
  img?: {
    img_small?: string;
    img_middle?: string;
    img_large?: string;
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
