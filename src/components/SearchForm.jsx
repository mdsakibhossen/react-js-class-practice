import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../store/features/note/noteSlice";

const SearchForm = () => {
  const { searchValue } = useSelector((storeStates) => storeStates.note);
  const dispatch = useDispatch();
  return (
    <div>
      <br />
      <input
        type="search"
        onChange={(e) => dispatch(setSearchValue(e.target.value))}
        value={searchValue}
        placeholder="Search Note"
      />
    </div>
  );
};

export default SearchForm;
