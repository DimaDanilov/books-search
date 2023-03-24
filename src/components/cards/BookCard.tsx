import styled from "styled-components";
import { globalStyles } from "../../styles/style";
import book_placeholder from "../../assets/icons/book_placeholder.svg";
import { Book } from "../../models/Book";
import { NavLink } from "react-router-dom";
import { Category } from "../../ui/Category";
import { useSearchStore } from "../../pages/searchPage/store/SearchStore";
import { observer } from "mobx-react-lite";

export const BookCard = observer(({ book }: { book: Book }) => {
  const searchStore = useSearchStore();

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (searchStore.isBooksArrayLoading) {
      e.preventDefault();
    }
  };
  const bookCategory = book.categories && book.categories[0];
  return (
    <CardLink
      isLoading={searchStore.isBooksArrayLoading}
      to={`/book?id=${book.id}`}
      onClick={onClick}
    >
      <BookImage
        src={book.img?.img_large || book.img?.img_small || book_placeholder}
        alt="Book"
      />
      <Category>{bookCategory}</Category>
      <BookTitle>{book.title}</BookTitle>
      <BookAuthor>{book.authors?.join(", ")}</BookAuthor>
    </CardLink>
  );
});

const CardLink = styled(NavLink)<{ isLoading: boolean }>`
  background-color: ${globalStyles.colors.lightgrey};
  margin: 0;
  padding: 5%;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  cursor: ${(props) => (props.isLoading ? "wait" : "pointer")};
`;
const BookImage = styled.img`
  width: 100%;
`;
const BookTitle = styled.h4`
  color: ${globalStyles.colors.black};
  font-size: ${globalStyles.fonts.h4};
`;
const BookAuthor = styled.h4`
  color: ${globalStyles.colors.grey};
  font-size: ${globalStyles.fonts.h4};
  font-weight: 500;
`;
