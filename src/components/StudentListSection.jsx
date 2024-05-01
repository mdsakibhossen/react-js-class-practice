import React from "react";
import StudentList from "./StudentList";

const StudentListSection = (props) => {
  const {
    students,
    setStudents,
    setEditableStudent,
    setEditMode,
    setStudentName,
  } = props;
  const presentStudents = students.filter(
    (student) => student.isPresent === true
  );
  const absentStudents = students.filter(
    (student) => student.isPresent === false
  );
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <StudentList
        title="All Students"
        students={students}
        setStudents={setStudents}
        setEditableStudent={setEditableStudent}
        setEditMode={setEditMode}
        setStudentName={setStudentName}
      />
      <StudentList
        title="Present Students"
        students={presentStudents}
        setStudents={setStudents}
      />
      <StudentList
        title="Absent Students"
        students={absentStudents}
        setStudents={setStudents}
      />
    </div>
  );
};

export default StudentListSection;
