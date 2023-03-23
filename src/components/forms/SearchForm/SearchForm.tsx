import styled from "styled-components";
import { SortSelect } from "./selects/SortSelect";
import { CategoriesSelect } from "./selects/CategoriesSelect";
import { SearchField } from "./fields/SearchField";

const onFormSubmit = () => (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
};

export const SearchForm = () => {
  return (
    <Form name="search_books" action="" onSubmit={onFormSubmit()}>
      <FormBlock>
        <SearchField />
      </FormBlock>

      <SelectsContainer>
        <SelectContainer>
          <CategoriesSelect />
        </SelectContainer>
        <SelectContainer>
          <SortSelect />
        </SelectContainer>
      </SelectsContainer>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
`;
const FormBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 50%;
  margin: 5px 10px;
`;
const SelectsContainer = styled(FormBlock)`
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const SelectContainer = styled(FormBlock)`
  @media (max-width: 800px) {
    width: 100%;
  }
`;
