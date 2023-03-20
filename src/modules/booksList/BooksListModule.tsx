import styled from "styled-components";
import { Book } from "../../models/Book";
import { globalStyles } from "../../styles/style";
import { BookCard } from "./components/BookCard";

const books: Array<Book> = [
  {
    img: "",
    category: "Computers",
    title: "Книга 1",
    author: "Автор 1",
  },
  {
    img: "",
    category: "Computers",
    title: "Книга 2",
    author: "Автор 2",
  },
  {
    img: "",
    category: "Computers",
    title: "Книга 3",
    author: "Автор 3",
  },
  {
    img: "",
    category: "Computers",
    title: "Книга 4",
    author: "Автор 4",
  },
  {
    img: "",
    category: "Computers",
    title: "Книга 5",
    author: "Автор 5",
  },
];

const bookCards = books.map((book) => <BookCard {...book} />);

export const BooksListModule = () => {
  return (
    <Container>
      <BooksListStatus>Found 446 results</BooksListStatus>
      <BooksList>{bookCards}</BooksList>
    </Container>
  );
};

const Container = styled.div`
  width: 95%;
  margin: 0 auto;
`;
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
