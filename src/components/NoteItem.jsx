import { useDispatch } from "react-redux";
import { setEditMode } from "../store/features/note/noteSlice";
import {
  useDeleteNoteMutation,
  useUpdateNoteMutation,
} from "../store/api-services/note";

const NoteItem = ({ note }) => {
  const dispatch = useDispatch();
  const [deleteNote] = useDeleteNoteMutation();
  const [updateNote] = useUpdateNoteMutation();
  const changeStatus = async () => {
    // console.log({
    //   id: note.id,
    //   note: { ...note, isCompleted: !note.isCompleted },
    // });
    await updateNote({
      id: note.id,
      note: { ...note, isCompleted: !note.isCompleted },
    });
  };
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          onChange={changeStatus}
          checked={note.isCompleted}
        />
      </td>
      <td
        style={{ textDecoration: note.isCompleted ? "line-through" : "none" }}
      >
        {note.title}
      </td>
      <td
        style={{ textDecoration: note.isCompleted ? "line-through" : "none" }}
      >
        {note.description}
      </td>
      <td>
        <button onClick={() => dispatch(setEditMode(note))}>Edit</button>
      </td>
      <td>
        <button onClick={() => deleteNote(note.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default NoteItem;
