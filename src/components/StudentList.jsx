import React from "react";
import StudentItem from "./StudentItem";

const StudentList = (props) => {
  const {
    title,
    students,
    setStudents,
    setEditableStudent,
    setEditMode,
    setStudentName,
  } = props;
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <div style={{ border: "1px solid" }}>
        {students.map((student) => (
          <StudentItem
            key={student.id}
            student={student}
            students={students}
            setStudents={setStudents}
            setEditableStudent={setEditableStudent}
            setStudentName={setStudentName}
            setEditMode={setEditMode}
            title={title}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentList;
