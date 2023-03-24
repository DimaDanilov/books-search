import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { globalStyles } from "../../../styles/style";
import { Container } from "../../../ui/Container";
import { BookCard } from "../../../components/cards/BookCard";
import { useSearchStore } from "../store/SearchStore";
import { IBooksArray } from "../../../models/Book";
import withLoader from "../../../components/hoc/withLoader";

const BookList = ({
  booksArray,
  moreToLoad,
  onClick,
}: {
  booksArray: IBooksArray;
  moreToLoad: boolean;
  onClick: (() => void) | undefined;
}) => {
  const bookCards = React.useMemo(
    () =>
      booksArray.books?.map((book) => <BookCard key={book.id} book={book} />),
    [booksArray.books.length]
  );

  return (
    <SectionContainer>
      <BooksListStatus>Found {booksArray.totalItems} results</BooksListStatus>
      <BooksList>{bookCards}</BooksList>
      {moreToLoad && <PaginationBtn onClick={onClick}>Load more</PaginationBtn>}
    </SectionContainer>
  );
};

export const BooksListModule = observer(() => {
  const searchStore = useSearchStore();

  const [moreToLoad, setMoreToLoad] = useState<boolean>(false);
  const [booksToShow, setBooksToShow] = useState<IBooksArray>({
    books: [],
    totalItems: 0,
  });

  useEffect(() => {
    searchStore.reset(); // Reset loading params if go back to previous page
  }, [searchStore]);

  useEffect(() => {
    setBooksToShow(searchStore.booksArray);
  }, [searchStore.booksArray]);

  useEffect(() => {
    setMoreToLoad(searchStore.nextBooksArray.books.length > 0);
  }, [searchStore.nextBooksArray.books.length]);

  const onLoadMoreClick = () => {
    searchStore.loadBooks("add");
  };

  const BookListWithLoader = withLoader(() =>
    BookList({
      booksArray: booksToShow,
      moreToLoad: moreToLoad,
      onClick: onLoadMoreClick,
    })
  );

  return (
    <BookListWithLoader
      isLoading={searchStore.isBooksArrayLoading}
      loaderWidth="30vw"
    />
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
  grid-template-columns: 1fr;
  gap: 30px;
  margin: 8vh auto;
  width: 100%;
  @media (min-width: 450px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  @media (min-width: 720px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  @media (min-width: 950px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }
`;
const PaginationBtn = styled.button`
  width: 70%;
  margin: 0 auto;
  padding: 10px;
`;
