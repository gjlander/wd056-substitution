import { useTodos } from '../context/todoContext';
const ToDoItem = ({ todo }) => {
    const { setTodos } = useTodos();

    const toggleTodo = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            })
        );
    };
    return (
        <li className='flex items-center mb-2'>
            <input
                type='checkbox'
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className='mr-2'
            />
            <p className={todo.completed && 'line-through'}>{todo.text}</p>
        </li>
    );
};

export default ToDoItem;
