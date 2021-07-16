import initialState from "../initialState";

export default function uiReducer(state = initialState.ui, action) {
    switch(action.type) {
        case 'TASK_IS_CREATED':
            return {
                state,
                isCreated: action.bool 
            }
        case 'SIGN_OUT':
            return {
                ...state,
                isLogout: true
            }
        case 'SIGN_IN':
            return {
                ...state,
                isLogout: false
            }
        case 'SIGN_UP':
            return {
                ...state,
                isLogout: false
            }
        default: 
            return state
    }
}