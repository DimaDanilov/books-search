import styled from "styled-components";
import { globalStyles } from "../../../styles/style";
import { observer } from "mobx-react-lite";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SortSelect } from "./SortSelect";
import { CategoriesSelect } from "./CategoriesSelect";
import { useEffect, useState } from "react";

const onFormSubmit = () => (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
};

export const SearchForm = observer(() => {
  let navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");
  const [searchInputText, setSearchInputText] = useState<string>("");

  const onSearchFieldChange =
    () => (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchInputText(e.target.value);
    };

  const onSearchClick = () => {
    const currentUrlParams = new URLSearchParams(window.location.search);
    currentUrlParams.set("search", searchInputText);
    navigate(window.location.pathname + "?" + currentUrlParams.toString());
  };

  useEffect(() => {
    if (searchQuery) {
      setSearchInputText(searchQuery);
    }
  }, [searchQuery]);

  return (
    <Form name="search_books" action="" onSubmit={onFormSubmit()}>
      <FormBlock>
        <TextInput
          type="text"
          name="search_input"
          id="search_input"
          onChange={onSearchFieldChange()}
          value={searchInputText}
        />
        <input type="submit" value="Send" onClick={onSearchClick} />
      </FormBlock>

      <FormBlock>
        <FormBlock>
          <CategoriesSelect />
        </FormBlock>
        <FormBlock>
          <SortSelect />
        </FormBlock>
      </FormBlock>
    </Form>
  );
});

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
const TextInput = styled.input`
  width: 100%;
  height: ${globalStyles.form.formInputHeight};
`;
