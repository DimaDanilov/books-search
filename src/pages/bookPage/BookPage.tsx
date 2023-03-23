import styled from "styled-components";
import { Book } from "../../models/Book";
import book_placeholder from "../../assets/icons/book_placeholder.svg";
import { Container } from "../../ui/Container";
import { globalStyles } from "../../styles/style";
import { useEffect, useState } from "react";
import { getBook } from "../../services/BooksAPI";
import { useSearchParams } from "react-router-dom";
import { Category } from "../../ui/Category";

export const BookPage = () => {
  const [book, setBook] = useState<Book>({} as Book);
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");

  const categoriesList = book.categories?.map((category, index) => (
    <Category key={index}>
      {category}
      <br />
    </Category>
  ));

  useEffect(() => {
    async function fetchBook() {
      if (id) {
        const book = await getBook(id);
        setBook(book);
      }
    }
    fetchBook().catch(console.error);
  }, [id]);

  return (
    <BookContainer>
      <BookImage
        src={book.img?.img_large || book.img?.img_small || book_placeholder}
        alt="Book"
      />
      <BookInfoContainer>
        {categoriesList}
        <Title>{book.title}</Title>
        <Author>{book.authors?.join(", ")}</Author>
        {book.description && <Description>{book.description}</Description>}
      </BookInfoContainer>
    </BookContainer>
  );
};

const BookContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const BookImage = styled.img`
  width: 30%;
  align-self: flex-start;
`;
const BookInfoContainer = styled.div`
  width: 60%;
  padding: 3vh 0;
`;
const Title = styled.h1`
  color: ${globalStyles.colors.black};
  font-size: ${globalStyles.fonts.h1};
`;
const Author = styled.h3`
  color: ${globalStyles.colors.grey};
  font-size: ${globalStyles.fonts.h3};
`;
const Description = styled.h3`
  margin: 3vh auto;
  padding: 20px;
  font-size: ${globalStyles.fonts.h3};
  color: ${globalStyles.colors.black};
  border: 1.5px solid ${globalStyles.colors.grey};
  border-radius: 15px;
`;
