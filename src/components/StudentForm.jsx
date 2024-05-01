import React, { useContext } from "react";
import { StudentContext } from "../contexts/Student";

const StudentForm = () => {
  const {
    studentName,
    editMode,
    setStudents,
    students,
    setStudentName,
    setEditMode,
    setEditableStudent,
    editableStudent,
  } = useContext(StudentContext);

  const addStudentHandler = () => {
    const newStudent = {
      id: Date.now() + "",
      name: studentName,
      isPresent: undefined,
    };
    setStudents([...students, newStudent]);
    setStudentName("");
  };
  const updateHandler = () => {
    const updatedStudentList = students.map((item) => {
      if (item.id === editableStudent.id) {
        return {
          ...item,
          name: studentName,
        };
      }
      return item;
    });
    setStudents(updatedStudentList);
    setStudentName("");
    setEditMode(false);
    setEditableStudent(null);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (!studentName) {
      return alert("Please Enter Student Name");
    }
    editMode ? updateHandler(editableStudent) : addStudentHandler();
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
