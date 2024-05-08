import React, { useContext } from "react";
import { NoteContext } from "../contexts/Note";

const SearchForm = () => {
  const { searchValue, setSearchValue } = useContext(NoteContext);
  return (
    <div>
      <br />
      <input
        type="search"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        placeholder="Search Note"
      />
    </div>
  );
};

export default SearchForm;
