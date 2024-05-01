import React, { useContext } from "react";
import StudentList from "./StudentList";
import { StudentContext } from "../contexts/Student";

const StudentListSection = () => {
  const { students } = useContext(StudentContext);
  const presentStudents = students.filter(
    (student) => student.isPresent === true
  );
  const absentStudents = students.filter(
    (student) => student.isPresent === false
  );

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <StudentList title="All Students" students={students} />
      <StudentList title="Present Students" students={presentStudents} />
      <StudentList title="Absent Students" students={absentStudents} />
    </div>
  );
};

export default StudentListSection;
