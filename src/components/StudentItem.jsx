import React, { useContext } from "react";
import { StudentContext } from "../contexts/Student";

const StudentItem = (props) => {
  const { dispatch } = useContext(StudentContext);

  return (
    <div>
      <span>{props.student.name}</span>
      {props.title === "All Students" ? (
        <>
          <button
            onClick={() =>
              dispatch({ type: "EDIT_STUDENT", payload: props.student })
            }
          >
            Edit
          </button>
          <button
            onClick={() =>
              dispatch({ type: "DELETE_STUDENT", payload: props.student.id })
            }
          >
            Delete
          </button>
          <button
            onClick={() =>
              dispatch({
                type: "UPDATE_STUDENT",
                payload: {
                  student: props.student,
                  propertyName: "isPresent",
                  propertyValue: true,
                  isAllListBtnClicked: true,
                },
              })
            }
          >
            Make Present
          </button>
          <button
            onClick={() =>
              dispatch({
                type: "UPDATE_STUDENT",
                payload: {
                  student: props.student,
                  propertyName: "isPresent",
                  propertyValue: false,
                  isAllListBtnClicked: true,
                },
              })
            }
          >
            Make Absent
          </button>
        </>
      ) : (
        <button
          onClick={() =>
            dispatch({
              type: "UPDATE_STUDENT",
              payload: {
                student: props.student,
                propertyName: "isPresent",
                propertyValue: !props.student.isPresent,
              },
            })
          }
        >
          {props.student.isPresent
            ? "Send to Absent List"
            : "Send to Present List"}
        </button>
      )}
    </div>
  );
};

export default StudentItem;
