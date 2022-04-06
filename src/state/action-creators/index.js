export const addTodo = (text) => {
  return (dispatch) => {
    dispatch({
    type: 'ADD_TODO',
    payload: text
    });
  }
}

export const deleteTodo = (index) => {
  return (dispatch) => {
    dispatch({
    type: 'DELETE_TODO',
    payload: index
    });
  }
}

export const updateTodo = (text, index) => {
    return (dispatch) => {
        dispatch({
        type: 'UPDATE_TODO',
        payload: {text, index}
        });
    }
    }

export const toggleTodo = (index) => {
    return (dispatch) => {
        dispatch({
        type: 'TOGGLE_TODO',
        payload: index
        });
    }
    }