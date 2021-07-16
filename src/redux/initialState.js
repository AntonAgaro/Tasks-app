const initialState = {
    tasks: {
        tasksList: [],
        task: {
            isDone: false,
        }
    },
    ui: {
        isCreated: false,
        isLogout: false
    },
    auth: {
        user: {},
        error: ''
    }
}

export default initialState;