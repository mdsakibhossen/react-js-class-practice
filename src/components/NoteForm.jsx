import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetForm, setNote } from "../store/features/note/noteSlice";
import {
  useAddNotesMutation,
  useUpdateNoteMutation,
} from "../store/api-services/note";

const NoteForm = () => {
  const { note, editMode } = useSelector((storeStates) => storeStates.note);
  const { title, description } = note;
  const dispatch = useDispatch();

  const [addNote, { isSuccess: isAddSuccess }] = useAddNotesMutation();
  const [updateNote, { isSuccess: isUpdateSuccess }] = useUpdateNoteMutation();
  useEffect(() => {
    (isAddSuccess || isUpdateSuccess) && dispatch(resetForm());
  }, [isAddSuccess, isUpdateSuccess]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      return alert("Please Enter Note Title");
    }

    editMode ? await updateNote({ id: note.id, note }) : await addNote(note);
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <input
        type="text"
        onChange={(e) =>
          dispatch(setNote({ property: e.target.name, value: e.target.value }))
        }
        value={title}
        name="title"
        placeholder="Note Title"
      />
      <br /> <br />
      <textarea
        onChange={(e) =>
          dispatch(setNote({ property: e.target.name, value: e.target.value }))
        }
        value={description}
        name="description"
        cols="30"
        rows="5"
        placeholder="Description"
        style={{ resize: "none" }}
      ></textarea>
      <br />
      <button type="submit">{editMode ? "Update Note" : "Add Note"}</button>
    </form>
  );
};

export default NoteForm;
