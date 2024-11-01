import { useState, useEffect } from 'react';
import { TodoContext } from './todoContext';
const TodoContextProvider = ({ children }) => {
    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem('todos')) || []
    );
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <TodoContext.Provider value={{ todos, setTodos, filter, setFilter }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContextProvider;