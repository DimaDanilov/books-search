import { Book } from "../../models/Book";

const testBook: Book = {
  id: 5,
  img: "",
  category: "Computers",
  title: "Книга 5",
  author: "Автор 5",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nisi facilis quisquam temporibus ut ex magnam, autem consequatur ipsum dignissimos quam laborum suscipit amet voluptate dicta doloremque maiores corporis! Reprehenderit eos fugiat error dolores quasi eaque sequi, ab ullam, in magni similique dignissimos, tenetur vitae sit molestias et laborum at.",
};

export const BookPage = () => {
  return (
    <>
      <h1>{testBook.id}</h1>;<h1>{testBook.category}</h1>;
      <h1>{testBook.title}</h1>;<h1>{testBook.author}</h1>;
      <h1>{testBook.description}</h1>;
    </>
  );
};
