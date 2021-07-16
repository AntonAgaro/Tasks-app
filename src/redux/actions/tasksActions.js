
export function onInputChange(name, value) {
    return {
        type: 'ON_INPUT_CHANGES',
        payload: {
            [name]: value,
        },
        
    }
}

export function addTask(task) {
    return (dispatch, getState, {getFirebase}) => {
        const firestore = getFirebase().firestore();
        const authorId = getState().firebase.auth.uid
        firestore
            .collection('tasks')
            .add({
                ...task,
                authorId,
                date: new Date()
            })
            .then(() => {
                dispatch({
                    type: 'ADD_TASK',
                    task
                });
            })
            .catch(err => {
                dispatch({
                    type: 'ADD_TASK_ERR',
                    err
                });
            });
    }
}

export function removeTask(task) {
    return (dispatch, getState, {getFirebase}) => {
        const firestore = getFirebase().firestore();
        firestore
            .collection('tasks')
            .doc(task.id)
            .delete()
            .then(() => {
                dispatch({
                    type: 'REMOVE_TASK'
                })
            })
            .catch(err => {
                dispatch({
                    type: 'REMOVE_TASK_ERR',
                    err
                })
            })
    }
}

export function markTaskDone(task) {
    return (dispatch, getState, {getFirebase}) => {
        const firestore = getFirebase().firestore();
        firestore
            .collection('tasks')
            .doc(task.id)
            .set(
                {
                    ...task,
                    isDone: !task.isDone
                },
                {merge: true}
            )
            .then(() => {
                dispatch({
                    type: 'MARK_TASK_DONE',
                    task
                })
            })
            .catch(err => {
                dispatch({
                    type: 'MARK_TASK_DONE_ERR',
                    err
                })
            })
    }
}

