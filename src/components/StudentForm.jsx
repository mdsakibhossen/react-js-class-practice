import React, { useContext } from "react";
import { StudentContext } from "../contexts/Student";

const StudentForm = () => {
  const { studentName, editMode, setStudentName, submitHandler } =
    useContext(StudentContext);

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
          onChange={(e) => setStudentName(e.target.value)}
          value={studentName}
        />
        <button type="submit">
          {editMode ? "Update Student" : "Add Student"}
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
