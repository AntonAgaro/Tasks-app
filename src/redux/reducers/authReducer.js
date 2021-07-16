import initialState from "../initialState";

const authReducer = (state = initialState.auth, action) => {
    switch(action.type) {
        case 'ON_CHANGE_EMAIL_AND_PASSWORD':
            return {
                ...state,
                error: '',
                user: {...state.user, ...action.payload}
            }
        case 'SIGN_IN':
            return {
                ...state
            }
        case 'SIGN_IN_ERR':
            return {
                ...state,
                error: action.err
            }
        case 'SIGN_OUT':
            return {
                ...state,
                
            }
        case 'SIGN_UP':
            return {
                ...state
            }
        case 'SIGN_UP_ERR':
            return {
                ...state
            }
        default:
            return state
    }
}

export default authReducer;