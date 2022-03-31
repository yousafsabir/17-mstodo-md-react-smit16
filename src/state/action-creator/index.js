export const addTask = (task) => {
    return (dispatch) => {
        dispatch({
        type: 'ADD_TASK',
        payload: task
        })
    }
    }

export const updateTask = (task) => {
    return (dispatch) => {
        dispatch({
        type: 'UPDATE_TASK',
        payload: task
        })
    }
    }
    
export const completeTask = (task) => {
    return (dispatch) => {
        dispatch({
        type: 'COMPLETE_TASK',
        payload: task
        })
    }
    } 
    
export const deleteTask = (task, index) => {
    return (dispatch) => {
        dispatch({
        type: 'DELETE_TASK',
        payload: {task, index}
        })
    }
    }