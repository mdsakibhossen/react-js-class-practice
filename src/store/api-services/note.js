import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const noteApi = createApi({
    reducerPath: 'noteApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    tagTypes: ["note"],
    endpoints: (builder) => ({
        getNotes: builder.query({
            query: () => `notes/`,
            providesTags: ["note"]
        }),
        addNotes: builder.mutation({
            query: (note) => ({
                url: `notes/`,
                method: 'POST',
                body: note,
            }),
            invalidatesTags: ["note"]
        }),
        updateNote: builder.mutation({
            query: ({ id, note }) => ({
                url: `notes/${id}`,
                method: 'PUT',
                body: note,
            }),
            invalidatesTags: ["note"]
        }),
        deleteNote: builder.mutation({
            query: (id) => ({
                url: `notes/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["note"]
        }),

    }),
})

export const { useGetNotesQuery, useAddNotesMutation, useUpdateNoteMutation, useDeleteNoteMutation } = noteApi