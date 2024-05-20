import { createContext, useEffect, useReducer, useState } from "react";

export const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const getNotes = () => {
    fetch("http://localhost:3000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  };

  useEffect(() => {
    getNotes();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!noteTitle.trim()) {
      return alert("Please Enter Note Title");
    }
    editMode ? updateNote() : addNote();
  };

  const addNote = () => {
    const newNote = {
      id: Date.now() + "",
      title: noteTitle,
      isCompleted: false,
    };

    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newNote),
    }).then(() => getNotes());

    setNoteTitle("");
  };
  const editNote = (note) => {
    setEditMode(true);
    setEditableNote(note);
    setNoteTitle(note.title);
  };
  const updateNote = () => {
    const { id } = editableNote;
    const updatedNote = {
      ...editableNote,
      title: noteTitle,
    };

    fetch(`http://localhost:3000/notes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedNote),
    }).then(() => getNotes());

    setEditMode(false);
    setEditableNote(null);
    setNoteTitle("");
  };
  const deleteNote = (noteId) => {
    fetch(`http://localhost:3000/notes/${noteId}`, {
      method: "DELETE",
    }).then(() => getNotes());
  };
  const changeStatus = (note) => {
    const { id } = note;
    const updatedNote = {
      ...note,
      isCompleted: !note.isCompleted,
    };

    fetch(`http://localhost:3000/notes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedNote),
    }).then(() => getNotes());
  };

  const ctxValue = {
    noteTitle,
    setNoteTitle,
    notes,
    setNotes,
    editMode,
    setEditMode,
    editableNote,
    setEditableNote,
    submitHandler,
    editNote,
    deleteNote,
    changeStatus,
    searchValue,
    setSearchValue,
  };
  return (
    <NoteContext.Provider value={ctxValue}>{children}</NoteContext.Provider>
  );
};

export default NoteProvider;
