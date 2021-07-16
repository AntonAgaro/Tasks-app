import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import store from '../redux/store';
import {createFirestoreInstance} from 'redux-firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCRaSdztf8YsvCgGurNi5sLHQTNmNgsGx8",
    authDomain: "tasks-app-a62a9.firebaseapp.com",
    projectId: "tasks-app-a62a9",
    storageBucket: "tasks-app-a62a9.appspot.com",
    messagingSenderId: "176289595870",
    appId: "1:176289595870:web:7a19188f00560c1bb69d4f"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const rrfConfig = {
    useFirestoreForProfile: true
}

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}
export {rrfProps};

