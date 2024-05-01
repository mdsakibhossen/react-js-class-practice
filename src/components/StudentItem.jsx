import React, { useContext } from "react";
import { StudentContext } from "../contexts/Student";

const StudentItem = (props) => {
  const {
    deleteHandler,
    editHandler,
    makePresentHandler,
    makeAbsentHandler,
    swapStudentHandler,
  } = useContext(StudentContext);

  return (
    <div>
      <span>{props.student.name}</span>
      {props.title === "All Students" ? (
        <>
          <button onClick={() => editHandler(props.student)}>Edit</button>
          <button onClick={() => deleteHandler(props.student.id)}>
            Delete
          </button>
          <button onClick={() => makePresentHandler(props.student)}>
            Make Present
          </button>
          <button onClick={() => makeAbsentHandler(props.student)}>
            Make Absent
          </button>
        </>
      ) : (
        <button onClick={() => swapStudentHandler(props.student)}>
          {props.student.isPresent
            ? "Send to Absent List"
            : "Send to Present List"}
        </button>
      )}
    </div>
  );
};

export default StudentItem;
