import styled from "styled-components";
import { globalStyles } from "../../../../styles/style";
import { observer } from "mobx-react-lite";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSearchStore } from "../../../../pages/searchPage/store/SearchStore";

export const SearchField = observer(() => {
  const searchStore = useSearchStore();

  let navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");
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
    if (searchQuery) {
      setSearchInputText(searchQuery);
    }
  }, [searchQuery]);

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
