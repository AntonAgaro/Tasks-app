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
        user: {}
    }
}

export default initialState;