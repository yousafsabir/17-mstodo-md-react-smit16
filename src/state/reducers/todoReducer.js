const todo=localStorage.getItem('todos');
const todos=todo?JSON.parse(todo):[];


const reducer = (state = todos, action) => {
    if (action.type==='ADD_TODO') {
        let newTodo=[...state,{task: action.payload, completed: false}];
        localStorage.setItem('todos',JSON.stringify(newTodo));
        return newTodo
    }
    else if (action.type==='DELETE_TODO') {
        state.splice(action.payload.index,1);
        localStorage.setItem('todos',JSON.stringify(state));
        return [...state];
    }
    else if (action.type==='UPDATE_TODO') {
        state[action.payload.index].task = action.payload.text;
        localStorage.setItem('todos',JSON.stringify(state));
        return [...state];
    }
    else if (action.type==='TOGGLE_TODO') {
        state[action.payload].completed = !state[action.payload].completed;
        localStorage.setItem('todos',JSON.stringify(state));
        return [...state];
    
    }
    else {
        return state;
    }
}

export default reducer;