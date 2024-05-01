import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentListSection from "./components/StudentListSection";

function App() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState([]);
  return (
    <div className="App">
      <StudentForm
        studentName={studentName}
        editMode={editMode}
        editableStudent={editableStudent}
        setStudents={setStudents}
        students={students}
        setStudentName={setStudentName}
        setEditMode={setEditMode}
        setEditableStudent={setEditableStudent}
      />
      <StudentListSection
        students={students}
        setStudents={setStudents}
        setEditableStudent={setEditableStudent}
        setEditMode={setEditMode}
        setStudentName={setStudentName}
      />
    </div>
  );
}

export default App;
