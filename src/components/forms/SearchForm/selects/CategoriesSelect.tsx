import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { Categories } from "../../../../models/Categories";
import { Label } from "../../../../ui/Label";
import { Select } from "../../../../ui/Select";
import { useSearchStore } from "../../../../pages/searchPage/store/SearchStore";

export const CategoriesSelect = observer(() => {
  const searchStore = useSearchStore();
  let navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const currentUrlParams = new URLSearchParams(window.location.search);
    currentUrlParams.set("category", e.target.value);
    navigate(window.location.pathname + "?" + currentUrlParams);
  };

  return (
    <>
      <Label htmlFor="categories">Categories</Label>
      <Select
        name="categories"
        id="categories"
        value={Categories[searchStore.category]}
        onChange={onChange}
        disabled={searchStore.isBooksArrayLoading}
      >
        <option>{Categories[0]}</option>
        <option>{Categories[1]}</option>
        <option>{Categories[2]}</option>
        <option>{Categories[3]}</option>
        <option>{Categories[4]}</option>
        <option>{Categories[5]}</option>
        <option>{Categories[6]}</option>
      </Select>
    </>
  );
});
