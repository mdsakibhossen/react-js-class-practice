import { createContext, useReducer } from "react";
import { useState } from "react";
import { studentReducer } from "../reducers/student";

export const StudentContext = createContext();

const StudentProvider = ({ children }) => {
  
  const initialStates = {
    studentName: "",
    students: [],
    editMode: false,
    editableStudent: null,
  };
  const [studentStates, dispatch] = useReducer(studentReducer, initialStates);

  const contextValue = {
    studentStates,
    dispatch,
  };

  return (
    <StudentContext.Provider value={contextValue}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
