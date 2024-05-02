import React, { useContext } from "react";
import { StudentContext } from "../contexts/Student";

const StudentForm = () => {
  const { studentStates, dispatch } = useContext(StudentContext);
  const submitHandler = (e) => {
    e.preventDefault();

    if (!studentStates.studentName) {
      return alert("Please Enter Student Name");
    }
    studentStates.editMode
      ? dispatch({
          type: "UPDATE_STUDENT",
          payload: {
            student: studentStates.editableStudent,
            propertyName: "name",
            propertyValue: studentStates.studentName,
          },
        })
      : dispatch({ type: "ADD_STUDENT" });
  };
  return (
    <div
      className="StudentForm"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>StudentForm</h1>
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) =>
            dispatch({ type: "ON_CHANGE_INPUT", payload: e.target.value })
          }
          value={studentStates.studentName}
        />
        <button type="submit">
          {studentStates.editMode ? "Update Student" : "Add Student"}
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
