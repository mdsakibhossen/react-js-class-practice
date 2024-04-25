const NoteItem = (props) => {
  const {
    note,
    noteList,
    setNoteList,
    setEditMode,
    setNoteTitle,
    setEditAbleNote,
  } = props;

  const editHandler = (note) => {
    setEditMode(true);
    setNoteTitle(note.title);
    setEditAbleNote(note);
  };
  const deleteHandler = (noteId) => {
    const newNoteList = noteList.filter((note) => note.id !== noteId);
    setNoteList(newNoteList);
  };
  return (
    <span>
      <span>{note.title}</span>
      <button onClick={() => editHandler(note)}>Edit</button>
      <button onClick={() => deleteHandler(note.id)}>Delete</button>
    </span>
  );
};

export default NoteItem;
