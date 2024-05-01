import React from "react";

const StudentItem = (props) => {
  const {
    student,
    students,
    setStudents,
    setEditableStudent,
    setEditMode,
    setStudentName,
    title,
  } = props;

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
      <span>{student.name}</span>
      {title === "All Students" ? (
        <>
          <button onClick={() => editHandler(student)}>Edit</button>
          <button onClick={() => deleteHandler(student.id)}>Delete</button>
          <button onClick={() => makePresentHandler(student)}>
            Make Present
          </button>
          <button onClick={() => makeAbsentHandler(student)}>
            Make Absent
          </button>
        </>
      ) : (
        <button onClick={() => swapStudentHandler(student)}>
          {student.isPresent ? "Send to Absent List" : "Send to Present List"}
        </button>
      )}
    </div>
  );
};

export default StudentItem;
