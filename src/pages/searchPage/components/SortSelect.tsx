import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { Sort } from "../../../models/Sort";
import { Label } from "../../../ui/Label";
import { Select } from "../../../ui/Select";
import { useSearchStore } from "../store/SearchStore";

export const SortSelect = observer(() => {
  const searchStore = useSearchStore();
  let navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const currentUrlParams = new URLSearchParams(window.location.search);
    currentUrlParams.set("sort", e.target.value);
    navigate(window.location.pathname + "?" + currentUrlParams);
  };

  return (
    <>
      <Label htmlFor="sort">Sorting by</Label>
      <Select
        name="sort"
        id="sort"
        value={Sort[searchStore.sortType]}
        onChange={onChange}
      >
        <option>{Sort[0]}</option>
        <option>{Sort[1]}</option>
      </Select>
    </>
  );
});
