import styled from "styled-components";
import { globalStyles } from "../../../styles/style";

export const SearchForm = () => {
  return (
    <Form name="search_books" action="">
      <FormBlock>
        <TextInput type="text" name="search_input" id="search_input" />
        <input type="submit" value="Send" />
      </FormBlock>

      <FormBlock>
        <FormBlock>
          <Label htmlFor="categories">Categories</Label>
          <Select name="categories" id="categories">
            <option>all</option>
            <option>art</option>
            <option>biography</option>
            <option>computers</option>
            <option>history</option>
            <option>medical</option>
            <option>poetry</option>
          </Select>
        </FormBlock>
        <FormBlock>
          <Label htmlFor="sort">Sorting by</Label>
          <Select name="sort" id="sort">
            <option>relevance </option>
            <option>newest</option>
          </Select>
        </FormBlock>
      </FormBlock>
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
  gap: 10px;
  width: 50%;
  margin: 5px 10px;
`;
const Label = styled.label`
  color: ${globalStyles.colors.white};
  display: flex;
  align-items: center;
  white-space: nowrap;
`;
const TextInput = styled.input`
  width: 100%;
  height: ${globalStyles.form.formInputHeight};
`;
const Select = styled.select`
  width: 100%;
  height: ${globalStyles.form.formInputHeight};
`;