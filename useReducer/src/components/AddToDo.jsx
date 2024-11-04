import { useState } from 'react';
import { useTodos } from '../context/todoContext';

const AddToDo = () => {
    const { todosDispatch } = useTodos();

    const [newTodo, setNewTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newTodo) return;
        todosDispatch({ type: 'TODO_ADDED', payload: newTodo });
        setNewTodo('');
    };

    return (
        <form onSubmit={handleSubmit} className='mb-4 flex'>
            <input
                type='text'
                name='todo'
                placeholder='Add a new to-do'
                className='flex-1 border rounded px-2 py-1 mr-2'
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button
                type='submit'
                className='bg-blue-500 text-white px-4 py-2 rounded'
            >
                Add
            </button>
        </form>
    );
};

export default AddToDo;