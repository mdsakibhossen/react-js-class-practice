import { createContext } from "react";
import { useState } from "react";

export const StudentContext = createContext();

const StudentProvider = ({ children }) => {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState([]);

  const addStudentHandler = () => {
    const newStudent = {
      id: Date.now() + "",
      name: studentName,
      isPresent: undefined,
    };
    setStudents([...students, newStudent]);
    setStudentName("");
  };
  const updateStudentHandler = () => {
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
    editMode ? updateStudentHandler(editableStudent) : addStudentHandler();
  };

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

  const contextValue = {
    studentName,
    setStudentName,
    students,
    setStudents,
    editMode,
    setEditMode,
    editableStudent,
    setEditableStudent,
    addStudentHandler,
    updateStudentHandler,
    submitHandler,
    deleteHandler,
    editHandler,
    makePresentHandler,
    makeAbsentHandler,
    swapStudentHandler,
  };

  return (
    <StudentContext.Provider value={contextValue}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
