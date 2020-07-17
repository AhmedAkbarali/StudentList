import { combineReducers } from "redux";
import { reducer as reduxForm } from 'redux-form';
import studentsReducer from "./studentsReducer";

export default combineReducers({
   form: reduxForm,
   students: studentsReducer
});