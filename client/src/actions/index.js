import axios from 'axios';
import { FETCH_STUDENTS } from "./types";


export const fetchStudents = () => async dispatch => {
    const res = await axios.get('/api/students');

    dispatch({ type: FETCH_STUDENTS, payload: res.data });
};

