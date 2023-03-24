import styled from "styled-components";
import { Book } from "../../models/Book";
import book_placeholder from "../../assets/icons/book_placeholder.svg";
import { Container } from "../../ui/Container";
import { globalStyles } from "../../styles/style";
import { useEffect, useState } from "react";
import { getBook } from "../../services/BooksAPI";
import { useSearchParams } from "react-router-dom";
import { Category } from "../../ui/Category";
import { Loader } from "../../components/common/Loader";

export const BookPage = () => {
  const [book, setBook] = useState<Book>({} as Book);
  const [isLoading, setIsLoading] = useState(false);

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
        setIsLoading(true);
        const book = await getBook(id);
        setBook(book);
        setIsLoading(false);
      }
    }
    fetchBook().catch(console.error);
  }, [id]);

  return (
    <>
      {isLoading && <Loader width="30vw" border="10px solid red" />}
      <BookContainer>
        <BookImage
          src={book.img?.img_large || book.img?.img_small || book_placeholder}
          alt="Book"
        />
        <CategoriesContainer>{categoriesList}</CategoriesContainer>
        <Title>{book.title}</Title>
        <Author>{book.authors?.join(", ")}</Author>
        {book.description && <Description>{book.description}</Description>}
      </BookContainer>
    </>
  );
};

const BookContainer = styled(Container)`
  display: grid;
  gap: 1%;
  padding: 4vh 0;
  grid-template-columns: 1fr;
  grid-template-areas:
    "image"
    "categories"
    "title"
    "author"
    "description";
  @media (min-width: 500px) {
    gap: 1% 5%;
    grid-template-columns: 3fr 2fr;
    grid-template-areas:
      "image categories"
      "image title"
      "image author"
      "image ."
      "description description";
  }
  @media (min-width: 690px) {
    grid-template-columns: 1fr 2fr;
  }
  @media (min-width: 1000px) {
    grid-template-areas:
      "image categories"
      "image title"
      "image author"
      "image description"
      "image .";
  }
`;
const BookImage = styled.img`
  width: 100%;
  grid-area: image;
`;
const CategoriesContainer = styled.div`
  width: 100%;
  margin: 1vh 0;
  grid-area: categories;
`;
const Title = styled.h1`
  width: 100%;
  color: ${globalStyles.colors.black};
  font-size: ${globalStyles.fonts.h1};
  grid-area: title;
`;
const Author = styled.h3`
  width: 100%;
  color: ${globalStyles.colors.grey};
  font-size: ${globalStyles.fonts.h3};
  grid-area: author;
`;
const Description = styled.p`
  margin: 3vh auto;
  padding: 20px;
  font-size: ${globalStyles.fonts.p};
  font-weight: 500;
  color: ${globalStyles.colors.black};
  border: 1.5px solid ${globalStyles.colors.grey};
  border-radius: 15px;
  grid-area: description;
`;
