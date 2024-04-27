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
  const completionHandler = (isChecked, checkedNote) => {
    const newNoteList = noteList.map((note) => {
      if (note.id === checkedNote.id) {
        return {
          ...note,
          isCompleted: isChecked,
        };
      }
      return note;
    });
    setNoteList(newNoteList);
  };

  return (
    <span>
      <input
        type="checkbox"
        onChange={(e) => completionHandler(e.target.checked, note)}
      />
      <span
        style={{ textDecoration: note.isCompleted ? " line-through" : "none" }}
      >
        {note.title}
      </span>
      <button onClick={() => editHandler(note)}>Edit</button>
      <button onClick={() => deleteHandler(note.id)}>Delete</button>
    </span>
  );
};

export default NoteItem;
