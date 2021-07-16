export default function taskIsCreated(bool) {
    return {
        type: 'TASK_IS_CREATED',
        bool
    }
}