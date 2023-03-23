import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Categories } from "../../../models/Categories";
import { Sort } from "../../../models/Sort";
import { globalStyles } from "../../../styles/style";
import { Container } from "../../../ui/Container";
import { BookCard } from "../../../components/cards/BookCard";
import { useSearchStore } from "../store/SearchStore";

export const BooksListModule = observer(() => {
  const searchStore = useSearchStore();

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");
  const sortQuery = searchParams.get("sort");
  const categoryQuery = searchParams.get("category");

  useEffect(() => {
    searchStore.setPageSettings({ type: "search", value: searchQuery });
    searchStore.setBooks();
  }, [searchStore, searchQuery]);

  useEffect(() => {
    searchStore.setPageSettings({
      type: "sort",
      value: Sort[sortQuery as keyof typeof Sort],
    });
    searchStore.setBooks();
  }, [searchStore, sortQuery]);

  useEffect(() => {
    searchStore.setPageSettings({
      type: "category",
      value: Categories[categoryQuery as keyof typeof Categories],
    });
    searchStore.setBooks();
  }, [searchStore, categoryQuery]);

  const bookCards = searchStore.booksArray.books?.map((book) => {
    return <BookCard key={book.id} book={book} />;
  });

  const onLoadMoreClick = () => {
    searchStore.addBooks();
  };

  return (
    <SectionContainer>
      <BooksListStatus>
        Found {searchStore.booksArray.totalItems} results
      </BooksListStatus>
      <BooksList>{bookCards}</BooksList>
      {searchStore.morePagesToShow && (
        <PaginationBtn onClick={onLoadMoreClick}>Load more</PaginationBtn>
      )}
    </SectionContainer>
  );
});

const SectionContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  padding: 5vh 0 10vh;
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
  width: 100%;
`;
const PaginationBtn = styled.button`
  width: 50%;
  margin: 0 auto;
  padding: 10px;
`;
