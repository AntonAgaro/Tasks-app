import initialState from "../initialState";

export default function tasksReducer(state = initialState.tasks, action) {
    switch(action.type) {
        case 'ON_INPUT_CHANGES':
            return {
                ...state,
                task: {...state.task, ...action.payload}
                
            }
        case 'ADD_TASK':
            return {
                ...state,
            }
        case 'ADD_TASK_ERROR': 
            return {
                ...state
            }
        case 'REMOVE_TASK':
            return {
                ...state
            }
        case 'REMOVE_TASK_ERR':
            return {
                ...state
            }
        case 'MARK_TASK_DONE':
            return {
                ...state
            }
        case 'MARK_TASK_DONE_ERR':
            return {
                ...state
            }
        default:
            return state;
    }
}