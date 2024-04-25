import React, { useState } from "react";

const NoteForm = (props) => {
  const {
    noteList,
    setNoteList,
    editMode,
    setEditMode,
    noteTitle,
    setNoteTitle,
    editAbleNote,
    setEditAbleNote,
  } = props;

  const submitHandler = (e) => {
    e.preventDefault();
    if (!noteTitle) return alert("Please Enter Note Title");

    editMode ? updateHandler() : createHandler();
  };
  const createHandler = () => {
    const newNote = {
      id: Date.now() + "",
      title: noteTitle,
    };
    setNoteList([...noteList, newNote]);
    setNoteTitle("");
  };

  const updateHandler = () => {
    const updatedNoteList = noteList.map((note) => {
      if (note.id === editAbleNote.id) {
        return {
          ...note,
          title: noteTitle,
        };
      }
      return note;
    });
    setNoteList(updatedNoteList);
    setEditMode(false);
    setNoteTitle("");
    setEditAbleNote(null);
  };
  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          onChange={(e) => setNoteTitle(e.target.value)}
          value={noteTitle}
        />
        <button>{editMode ? "Update Note" : "Add Note"}</button>
      </form>
    </div>
  );
};

export default NoteForm;
