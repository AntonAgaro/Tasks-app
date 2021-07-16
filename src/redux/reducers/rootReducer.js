import { combineReducers } from "redux";
import tasksReducer from "./tasksReducer";
import uiReducer from "./uiReducer";
import authReducer from './authReducer';
import { firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from 'redux-firestore';

const rootReducer = combineReducers({
    tasksReducer,
    uiReducer,
    authReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer;