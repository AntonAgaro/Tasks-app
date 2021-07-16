import { actionTypes } from "redux-firestore";

const onChangeEmailAndPassword = (name, value) => {
    return {
        type: 'ON_CHANGE_EMAIL_AND_PASSWORD',
        payload: {
            [name]: value
        }
    }
}

const signIn = (creds) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase
            .auth()
            .signInWithEmailAndPassword(creds.email, creds.password)
            .then(() => {
                dispatch({
                    type: 'SIGN_IN'
                })
            })
            .catch(err => {
                dispatch({
                    type: 'SIGN_IN_ERR',
                    err
                })
            })
    }
}

const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase
            .auth()
            .signOut()
            .then(() => {
                dispatch({
                    type: 'SIGN_OUT'
                });
                dispatch({
                    type: actionTypes.CLEAR_DATA
                })
            })
    }
}

const signUp = (creds) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase
            .auth()
            .createUserWithEmailAndPassword(creds.email, creds.password)
            .then(() => {
                dispatch({
                    type: 'SIGN_UP'
                })
            })
            .catch(err => {
                dispatch({
                    type: 'SIGN_UP_ERR',
                    err
                })
            })
    }
}

export {signIn, onChangeEmailAndPassword, signOut, signUp};