import styled from "styled-components";
import { globalStyles } from "../../../styles/style";
import book_placeholder from "../../../assets/icons/book_placeholder.svg"; // Tell webpack this JS file uses this image
import { Book } from "../../../models/Book";
import { NavLink } from "react-router-dom";

export const BookCard = ({ book }: { book: Book }) => {
  return (
    <Container to={`/book?id=${book.id}`}>
      <BookImage src={book.img || book_placeholder} alt="Book image" />
      <Category href="">{book.category}</Category>
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
const Category = styled.a`
  color: ${globalStyles.colors.grey};
  font-size: ${globalStyles.fonts.a};
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
