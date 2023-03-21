import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Categories } from "../../../models/Categories";
import { Sort } from "../../../models/Sort";
import { globalStyles } from "../../../styles/style";
import { Container } from "../../../ui/Container";
import { BookCard } from "../components/BookCard";
import { useSearchStore } from "../store/SearchStore";

export const BooksListModule = observer(() => {
  const searchStore = useSearchStore();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");
  const sortQuery = searchParams.get("sort");
  const categoryQuery = searchParams.get("category");

  const bookCards = searchStore.booksArray.books?.map((book) => {
    return <BookCard key={book.id} book={book} />;
  });

  useEffect(() => {
    if (searchQuery && searchQuery !== searchStore.searchField) {
      searchStore.setSearchField(searchQuery);
    }
    if (sortQuery && sortQuery !== Sort[searchStore.sortType]) {
      searchStore.setSortType(Sort[sortQuery as keyof typeof Sort]);
    }
    if (categoryQuery && categoryQuery !== Categories[searchStore.category]) {
      searchStore.setCategory(
        Categories[categoryQuery as keyof typeof Categories]
      );
    }
    searchStore.fetchBooks();
  }, [searchQuery, sortQuery, categoryQuery]);

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
