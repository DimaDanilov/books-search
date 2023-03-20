import styled from "styled-components";
import { Book } from "../../../models/Book";
import { globalStyles } from "../../../styles/style";
import { Container } from "../../../ui/Container";
import { BookCard } from "../components/BookCard";

const books: Array<Book> = [
  {
    id: 1,
    img: "",
    category: "Computers",
    title: "Книга 1",
    author: "Автор 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nisi facilis quisquam temporibus ut ex magnam, autem consequatur ipsum dignissimos quam laborum suscipit amet voluptate dicta doloremque maiores corporis! Reprehenderit eos fugiat error dolores quasi eaque sequi, ab ullam, in magni similique dignissimos, tenetur vitae sit molestias et laborum at.",
  },
  {
    id: 2,
    img: "",
    category: "Computers",
    title: "Книга 2",
    author: "Автор 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nisi facilis quisquam temporibus ut ex magnam, autem consequatur ipsum dignissimos quam laborum suscipit amet voluptate dicta doloremque maiores corporis! Reprehenderit eos fugiat error dolores quasi eaque sequi, ab ullam, in magni similique dignissimos, tenetur vitae sit molestias et laborum at.",
  },
  {
    id: 3,
    img: "",
    category: "Computers",
    title: "Книга 3",
    author: "Автор 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nisi facilis quisquam temporibus ut ex magnam, autem consequatur ipsum dignissimos quam laborum suscipit amet voluptate dicta doloremque maiores corporis! Reprehenderit eos fugiat error dolores quasi eaque sequi, ab ullam, in magni similique dignissimos, tenetur vitae sit molestias et laborum at.",
  },
  {
    id: 4,
    img: "",
    category: "Computers",
    title: "Книга 4",
    author: "Автор 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nisi facilis quisquam temporibus ut ex magnam, autem consequatur ipsum dignissimos quam laborum suscipit amet voluptate dicta doloremque maiores corporis! Reprehenderit eos fugiat error dolores quasi eaque sequi, ab ullam, in magni similique dignissimos, tenetur vitae sit molestias et laborum at.",
  },
  {
    id: 5,
    img: "",
    category: "Computers",
    title: "Книга 5",
    author: "Автор 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nisi facilis quisquam temporibus ut ex magnam, autem consequatur ipsum dignissimos quam laborum suscipit amet voluptate dicta doloremque maiores corporis! Reprehenderit eos fugiat error dolores quasi eaque sequi, ab ullam, in magni similique dignissimos, tenetur vitae sit molestias et laborum at.",
  },
];

const bookCards = books.map((book) => <BookCard key={book.id} book={book} />);

export const BooksListModule = () => {
  return (
    <Container>
      <BooksListStatus>Found 446 results</BooksListStatus>
      <BooksList>{bookCards}</BooksList>
    </Container>
  );
};

const BooksListStatus = styled.h2`
  color: ${globalStyles.colors.black};
  text-align: center;
  font-size: ${globalStyles.fonts.h3};
`;
const BooksList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin: 8vh auto;
`;
