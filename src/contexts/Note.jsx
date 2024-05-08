import { createContext, useState } from "react";

export const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!noteTitle) {
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
    setNotes([...notes, newNote]);
    setNoteTitle("");
  };
  const editNote = (note) => {
    setEditMode(true);
    setEditableNote(note);
    setNoteTitle(note.title);
  };
  const updateNote = () => {
    const updatedNotes = notes.map((note) => {
      if (note.id === editableNote.id) {
        return {
          ...note,
          title: noteTitle,
        };
      }
      return note;
    });
    setNotes(updatedNotes);
    setEditMode(false);
    setEditableNote(null);
    setNoteTitle("");
  };
  const deleteNote = (noteId) => {
    const newNotes = notes.filter((note) => note.id !== noteId);
    setNotes(newNotes);
  };
  const changeStatus = (note) => {
    const updatedNotes = notes.map((item) => {
      if (item.id === note.id) {
        return {
          ...item,
          isCompleted: !item.isCompleted,
        };
      }
      return item;
    });
    setNotes(updatedNotes);
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
