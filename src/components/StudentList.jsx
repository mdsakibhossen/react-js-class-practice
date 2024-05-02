
import StudentItem from "./StudentItem";

const StudentList = (props) => {
  
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{props.title}</h2>
      <div style={{ border: "1px solid" }}>
        {props.students.map((student) => (
          <StudentItem
            key={student.id}
            student={student}
            students={props.students}
            title={props.title}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentList;
