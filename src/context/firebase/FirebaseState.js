import {FirebaseContext} from "./firebaseContext";
import {useReducer} from "react";
import {firebaseReducer} from "./firebaseReducer";
import axios from "axios";
import {ADD_NOTE, DELETE_NOTE, FETCH_NOTES, SHOW_LOADER} from "../types";

const url = process.env.REACT_APP_DB_URL;

const FirebaseState = ({children}) => {
    const initialState = {
        notes: [],
        loading: false
    }
    const [state, dispatch] = useReducer(firebaseReducer, initialState);

    const showLoader = () => dispatch({type: SHOW_LOADER});
    const fetchNotes = async () => {
        showLoader();
        try{
            const result = await axios.get(`${url}/notes.json`);
            const payload = Object.keys(result.data).map((key) => {
                return {
                    ...result.data[key],
                    id: key
                }
            });
            dispatch({type: FETCH_NOTES, payload})
        } catch (e) {
            throw new Error(e)
        }

    };

    const addNote = async (title) => {
        const note = {
            title, date: new Date().toJSON()
        };
        try {
            const result = await axios.post(`${url}/notes.json`, note);
            const payload = {
                ...note,
                id: result.data.name
            };
            dispatch({type: ADD_NOTE, payload});
        } catch (e) {
            throw new Error(e.message);
        }
    }

    const deleteNote = async (id) => {
        await axios.delete(`${url}/notes/${id}.json`);
        dispatch({
            type: DELETE_NOTE,
            payload: id
        })
    }

    return (
        <FirebaseContext.Provider value={{
            showLoader,
            addNote,
            deleteNote,
            fetchNotes,
            loading: state.loading,
            notes: state.notes
        }}>
            {children}
        </FirebaseContext.Provider>
    );
};

export default FirebaseState;