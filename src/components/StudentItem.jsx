import React, { useContext } from "react";
import { StudentContext } from "../contexts/Student";

const StudentItem = (props) => {
  const {
    students,
    setStudents,
    setEditableStudent,
    setEditMode,
    setStudentName,
  } = useContext(StudentContext);

  const deleteHandler = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const editHandler = (student) => {
    setEditMode(true);
    setEditableStudent(student);
    setStudentName(student.name);
  };

  const makePresentHandler = (student) => {
    if (student.isPresent !== undefined) {
      return alert(
        `${student.name} is already in ${
          student.isPresent === true ? "Present List" : "Absent List"
        }`
      );
    }
    const updatedStudentList = students.map((item) => {
      if (item.id === student.id) {
        return {
          ...item,
          isPresent: true,
        };
      }
      return item;
    });
    setStudents(updatedStudentList);
  };

  const makeAbsentHandler = (student) => {
    if (student.isPresent !== undefined) {
      return alert(
        `${student.name} is already in ${
          student.isPresent === true ? "Present List" : "Absent List"
        }`
      );
    }

    const updatedStudentList = students.map((item) => {
      if (item.id === student.id) {
        return {
          ...item,
          isPresent: false,
        };
      }
      return item;
    });

    setStudents(updatedStudentList);
  };

  const swapStudentHandler = (student) => {
    const updatedStudentList = students.map((item) => {
      if (item.id === student.id) {
        return {
          ...item,
          isPresent: !item.isPresent,
        };
      }
      return item;
    });
    setStudents(updatedStudentList);
  };

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
