export const ADD_NOTE = 'ADD_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'

export const addNote = (id, value, date, temp, iconCode) => ({type: ADD_NOTE, id, value, date, temp, iconCode})
export const deleteNote = (id) => ({type: DELETE_NOTE, id})
