import React, { useContext } from "react";
import StudentList from "./StudentList";
import { StudentContext } from "../contexts/Student";

const StudentListSection = () => {
  const { studentStates } = useContext(StudentContext);
  // console.log("studentStates.students", studentStates.students);
  const presentStudents = studentStates.students.filter(
    (student) => student.isPresent === true
  );
  const absentStudents = studentStates.students.filter(
    (student) => student.isPresent === false
  );

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <StudentList title="All Students" students={studentStates.students} />
      <StudentList title="Present Students" students={presentStudents} />
      <StudentList title="Absent Students" students={absentStudents} />
    </div>
  );
};

export default StudentListSection;
