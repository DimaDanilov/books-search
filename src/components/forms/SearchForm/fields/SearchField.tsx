import styled from "styled-components";
import { globalStyles } from "../../../../styles/style";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSearchStore } from "../../../../pages/searchPage/store/SearchStore";

export const SearchField = observer(() => {
  const searchStore = useSearchStore();

  let navigate = useNavigate();
  const [searchInputText, setSearchInputText] = useState<string>("");

  const onChange = () => (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputText(e.target.value);
  };

  const onClick = () => {
    if (searchInputText) {
      const currentUrlParams = new URLSearchParams(window.location.search);
      currentUrlParams.set("search", searchInputText);
      navigate(window.location.pathname + "?" + currentUrlParams.toString());
    }
  };

  useEffect(() => {
    if (searchStore.searchField) {
      setSearchInputText(searchStore.searchField);
    }
  }, [searchStore.searchField]);

  return (
    <>
      <TextInput
        type="text"
        name="search_input"
        id="search_input"
        value={searchInputText}
        onChange={onChange()}
        disabled={searchStore.isBooksArrayLoading}
      />
      <input
        type="submit"
        value="Send"
        onClick={onClick}
        disabled={searchStore.isBooksArrayLoading}
      />
    </>
  );
});

const TextInput = styled.input`
  width: 100%;
  height: ${globalStyles.form.formInputHeight};
`;
