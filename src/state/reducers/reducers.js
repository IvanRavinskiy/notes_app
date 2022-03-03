import {ADD_NOTE, DELETE_NOTE} from '../actions/actions';

const initState = {
    notes: [],
}

export const appReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return {
                ...state,
                notes: [{
                    id: action.id,
                    note: action.value,
                    date: action.date,
                    temp: action.temp,
                    iconCode: action.iconCode,
                }, ...state.notes]
            }
        case DELETE_NOTE:
            return {...state, notes: [...state.notes].filter(n => n.id !== action.id)}
        default:
            return state
    }
}