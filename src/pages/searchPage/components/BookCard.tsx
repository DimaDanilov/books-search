import styled from "styled-components";
import { globalStyles } from "../../../styles/style";
import book_placeholder from "../../../assets/icons/book_placeholder.svg";
import { Book } from "../../../models/Book";
import { NavLink } from "react-router-dom";
import { CategoryLink } from "../../../ui/CategoryLink";

export const BookCard = ({ book }: { book: Book }) => {
  return (
    <Container to={`/book?id=${book.id}`}>
      <BookImage src={book.img || book_placeholder} alt="Book" />
      <CategoryLink link={book.category}>{book.category}</CategoryLink>
      <BookTitle>{book.title}</BookTitle>
      <BookAuthor>{book.author}</BookAuthor>
    </Container>
  );
};

const Container = styled(NavLink)`
  background-color: #f3f2f1;
  padding: 5%;
  text-decoration: none;
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
