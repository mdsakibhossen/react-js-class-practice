import NoteItem from "./NoteItem";

const NoteListSection = (props) => {
  const { noteList, setNoteList, setEditMode, setNoteTitle, setEditAbleNote } =
    props;
  return (
    <div>
      <h3>NoteList</h3>
      <ul>
        {noteList.map((note) => (
          <li key={note.id}>
            <NoteItem
              note={note}
              noteList={noteList}
              setNoteList={setNoteList}
              setEditMode={setEditMode}
              setNoteTitle={setNoteTitle}
              setEditAbleNote={setEditAbleNote}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteListSection;
