const todoReducer = (state = [], action) => {
    if (action.type === 'ADD_TASK') {
        return [...state, action.payload]
    } 
    else if (action.type === 'UPDATE_TASK') {
        return [...state]
    }
    else if (action.type === 'DELETE_TASK') {
        let state=[]
        action.payload.task.splice(action.payload.index, 1)
        return action.payload.task
    }
    else {
        return state
    }
}

export default todoReducer;