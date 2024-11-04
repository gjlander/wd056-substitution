const todoReducer = (state, action) => {
    switch (action.type) {
        case 'TODO_ADDED': {
            return {
                ...state,
                todos: [
                    { id: Date.now(), text: action.payload, completed: false },
                    ...state.todos,
                ],
            };
        }

        case 'FILTER_SET': {
            return {
                ...state,
                filter: action.payload,
            };
        }
        case 'TODO_TOGGLED': {
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        return { ...todo, completed: !todo.completed };
                    }
                    return todo;
                }),
            };
        }
        default:
            return state;
    }
};

export default todoReducer;
