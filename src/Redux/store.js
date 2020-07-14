import {reducer as formReducer} from 'redux-form';
import {combineReducers, createStore} from "redux";
import {singInReducer} from "./singInReducer";
import {usersReducer} from "./usersReducer";


let reducer = combineReducers({
    form: formReducer,
    singInPage: singInReducer,
    usersPage: usersReducer
});

let store = createStore(reducer);

export default store;