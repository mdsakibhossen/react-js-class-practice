import React, { useContext } from "react";
import { NoteContext } from "../contexts/Note";
import NoteItem from "./NoteItem";

const NoteList = () => {
  const { notes, searchValue } = useContext(NoteContext);
  return (
    <div className="note-list">
      <h3>Note List</h3>
      <ul>
        {notes
          .filter((note) => note.title.includes(searchValue))
          .map((note) => (
            <li key={note.id}>
              <NoteItem note={note} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default NoteList;
