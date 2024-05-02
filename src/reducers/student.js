export const studentReducer = (state, action) => {
    switch (action.type) {
        case "ON_CHANGE_INPUT": {
            return {
                ...state,
                studentName: action.payload
            }
        }
        case "ADD_STUDENT": {
            const newStudent = {
                id: Date.now() + "",
                name: state.studentName,
                isPresent: undefined,
            };
            return {
                ...state,
                students: [...state.students, newStudent],
                studentName: ""
            }
        }
        case "EDIT_STUDENT": {
            // console.log(action.payload);
            return {
                ...state,
                studentName: action.payload.name,
                editMode: true,
                editableStudent: action.payload
            }
        }
        case "DELETE_STUDENT": {
            return {
                ...state,
                students: state.students.filter(student => student.id !== action.payload)
            }
        }

        case "UPDATE_STUDENT": {

            if (action.payload.student.isPresent !== undefined && action.payload.isAllListBtnClicked) {
                 alert(`${action.payload.student.name} is already in ${action.payload.student.isPresent ? "Present List":"Absent List"}`)
                 return state;
                
            }
            

            return {
                ...state,
                students: state.students.map(student => {
                    // console.log("editableStudent", action.payload.student.id);
                    if (student.id === action.payload.student.id) {

                        return {
                            ...student,
                            [action.payload.propertyName]: action.payload.propertyValue,
                        }

                    }
                    return student;
                }),
                editMode: action.payload.propertyName === "name" ? false : state.editMode,
                studentName: action.payload.propertyName === "name" ? "" : state.studentName,
                editableStudent: action.payload.propertyName === "name" ? null : state.editableStudent,


            }
        }

        default: { return state }
    }
}