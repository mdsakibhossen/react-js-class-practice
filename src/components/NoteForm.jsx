import React, { useContext } from "react";
import { NoteContext } from "../contexts/Note";

const NoteForm = () => {
  const { submitHandler, setNoteTitle, noteTitle, editMode } =
    useContext(NoteContext);
  return (
    <form className="form" onSubmit={submitHandler}>
      <input
        type="text"
        onChange={(e) => setNoteTitle(e.target.value)}
        value={noteTitle}
      />
      <button type="submit">{editMode ? "Update Note" : "Add Note"}</button>
    </form>
  );
};

export default NoteForm;
