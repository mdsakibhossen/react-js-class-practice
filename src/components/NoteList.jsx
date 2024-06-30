import NoteItem from "./NoteItem";
import { useGetNotesQuery } from "../store/api-services/note";
import { useSelector } from "react-redux";

const NoteList = () => {
  const { searchValue } = useSelector((storeStates) => storeStates.note);
  const { data: notes, isError, isFetching, error } = useGetNotesQuery();
  
  // Derived States
  const searchedNotes = notes?.filter(
    (note) =>
      note.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      note.description.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="note-list">
      <h3>Note List</h3>
      {isFetching ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>{error?.error || "Something went Wrong!!!"}</p>
      ) : notes?.length >= 1 ? (
        <table border={1}>
          <thead>
            <tr>
              <th>check</th>
              <th>Title</th>
              <th>Description</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {searchedNotes?.map((note) => (
              <NoteItem key={note.id} note={note} />
            ))}
          </tbody>
        </table>
      ) : (
        <h2>No Notes Are Available!!!</h2>
      )}
    </div>
  );
};

export default NoteList;
