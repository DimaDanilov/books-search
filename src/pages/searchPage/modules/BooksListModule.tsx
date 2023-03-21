import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import styled from "styled-components";
import { globalStyles } from "../../../styles/style";
import { Container } from "../../../ui/Container";
import { BookCard } from "../components/BookCard";
import { useSearchStore } from "../store/SearchStore";

export const BooksListModule = observer(() => {
  const searchStore = useSearchStore();
  const bookCards = searchStore.booksArray.books.map((book) => {
    console.log(book);
    return <BookCard key={book.id} book={book} />;
  });

  useEffect(() => {
    searchStore.fetchBooks();
  }, []);

  useEffect(() => {
    console.log(searchStore.booksArray);
  }, [searchStore.booksArray]);

  return (
    <Container>
      <BooksListStatus>
        Found {searchStore.booksArray.totalItems} results
      </BooksListStatus>
      <BooksList>{bookCards}</BooksList>
    </Container>
  );
});

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
