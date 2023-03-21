import styled from "styled-components";
import { Book } from "../../models/Book";
import book_placeholder from "../../assets/icons/book_placeholder.svg";
import { Container } from "../../ui/Container";
import { CategoryLink } from "../../ui/CategoryLink";
import { globalStyles } from "../../styles/style";

const testBook: Book = {
  id: "5",
  img: {
    img_small: "",
    img_big:
      "https://cdn.eksmo.ru/v2/ITD000000001128356/COVER/cover1__w600.jpg",
  },
  categories: ["Computers"],
  title: "Книга 5",
  authors: ["Автор 5", "Автор 6"],
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nisi facilis quisquam temporibus ut ex magnam, autem consequatur ipsum dignissimos quam laborum suscipit amet voluptate dicta doloremque maiores corporis! Reprehenderit eos fugiat error dolores quasi eaque sequi, ab ullam, in magni similique dignissimos, tenetur vitae sit molestias et laborum at.",
};

const categoriesLinks = testBook.categories?.map((category) => (
  <CategoryLink link={category}>{category}</CategoryLink>
));

export const BookPage = () => {
  return (
    <BookContainer>
      <BookImage src={testBook.img?.img_big || book_placeholder} alt="Book" />
      <BookInfoContainer>
        {categoriesLinks}
        <Title>{testBook.title}</Title>
        <Author>{testBook.authors}</Author>
        <Description>{testBook.description}</Description>
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
