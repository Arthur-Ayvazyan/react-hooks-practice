import {ADD_NOTE, DELETE_NOTE, FETCH_NOTES, SHOW_LOADER, HIDE_LOADER} from "../types";

const handlers = {

    [SHOW_LOADER]: state => ({...state, loading: true}),

    [HIDE_LOADER]: state => ({...state, loading: false}),

    [ADD_NOTE]: (state, {payload}) => ({
        ...state,
        notes: [...state.notes, payload]
    }),

    [FETCH_NOTES]: (state, {payload}) => ({
        ...state,
        notes: payload,
    }),

    [DELETE_NOTE]: (state, {payload}) => ({
        ...state,
        notes: state.notes.filter(note => (note.id !== payload))
    }),

    DEFAULT: state => state
}

export const firebaseReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action)
}