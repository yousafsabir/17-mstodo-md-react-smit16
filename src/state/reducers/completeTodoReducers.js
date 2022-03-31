const completeTask = (state=[], action) => {
    if (action.type === 'COMPLETE_TASK') {
        return [...state, action.payload]
    }
    else {
        return state
    }
}