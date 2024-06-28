import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { noteApi } from './api-services/note'
import { noteReducer } from './features/note/noteSlice'

export const store = configureStore({
    reducer: {
        [noteApi.reducerPath]: noteApi.reducer,
        note: noteReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(noteApi.middleware),
})

setupListeners(store.dispatch)