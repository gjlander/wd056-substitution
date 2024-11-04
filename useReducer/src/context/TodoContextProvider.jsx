import { useEffect, useReducer } from 'react';
import { TodoContext } from './todoContext';
import todoReducer from './todoReducer';
const TodoContextProvider = ({ children }) => {
    const [todoState, todosDispatch] = useReducer(todoReducer, {
        todos: JSON.parse(localStorage.getItem('todos')) || [],
        filter: 'all',
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todoState.todos));
    }, [todoState.todos]);

    return (
        <TodoContext.Provider value={{ todoState, todosDispatch }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContextProvider;
