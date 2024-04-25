import React, { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteListSection from "./components/NoteListSection";

function App() {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteList, setNoteList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editAbleNote, setEditAbleNote] = useState(null);

  return (
    <div className="App">
      <NoteForm
        noteList={noteList}
        setNoteList={setNoteList}
        editMode={editMode}
        setEditMode={setEditMode}
        noteTitle={noteTitle}
        setNoteTitle={setNoteTitle}
        editAbleNote={editAbleNote}
        setEditAbleNote={setEditAbleNote}
      />
      <NoteListSection
        noteList={noteList}
        setNoteList={setNoteList}
        setEditMode={setEditMode}
        setNoteTitle={setNoteTitle}
        setEditAbleNote={setEditAbleNote}
      />
    </div>
  );
}

export default App;
