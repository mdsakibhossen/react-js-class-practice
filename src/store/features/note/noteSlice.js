import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    note: {
        title: "",
        description: "",
        isCompleted: false
    },
    editMode: false,
    searchValue: ""
}

export const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {

        setNote: (state, action) => {
            const { property, value } = action.payload
            state.note = { ...state.note, [property]: value }
            // console.log(state.note);
        },
        setEditMode: (state, action) => {
            state.editMode = true;
            state.note = action.payload
        },
        resetForm: () => {
            return initialState; // can't do state = initialState 0r state = {...initialState}
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload;
            console.log(state.searchValue);
        }

    },
})

export const { setNote, setEditMode, resetForm, setSearchValue } = noteSlice.actions

export const noteReducer = noteSlice.reducer