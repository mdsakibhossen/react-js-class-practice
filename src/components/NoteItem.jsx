import React, { useContext } from "react";
import { NoteContext } from "../contexts/Note";

const NoteItem = ({ note }) => {
  const { changeStatus, editNote, deleteNote } = useContext(NoteContext);
  return (
    <div className="note-item">
      <input
        type="checkbox"
        onChange={() => changeStatus(note)}
        checked={note.isCompleted}
      />
      <span
        style={{ textDecoration: note.isCompleted ? "line-through" : "none" }}
      >
        {note.title}
      </span>
      <button onClick={() => editNote(note)}>Edit</button>
      <button onClick={() => deleteNote(note.id)}>Delete</button>
    </div>
  );
};

export default NoteItem;
