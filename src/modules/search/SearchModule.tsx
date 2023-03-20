import styled from "styled-components";
import search_background from "../../assets/images/search_background.jpg"; // Tell webpack this JS file uses this image
import { globalStyles } from "../../styles/style";
import { SearchForm } from "./components/SearchForm";

export const SearchModule = () => {
  return (
    <SearchSection>
      <Title>Search for books</Title>
      <SearchForm />
    </SearchSection>
  );
};

const SearchSection = styled.section`
  background-image: url("${search_background}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

const Title = styled.h1`
  color: ${globalStyles.colors.white};
  text-align: center;
  font-size: ${globalStyles.fonts.h1};
`;
