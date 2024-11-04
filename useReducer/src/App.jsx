import TodoContextProvider from './context/TodoContextProvider';
import AddToDo from './components/AddToDo';
import FilterComponent from './components/FilterComponent';
import ToDoList from './components/ToDoList';

const App = () => {
    return (
        <TodoContextProvider>
            <div className='p-4 min-h-screen w-screen dark:bg-slate-600 dark'>
                <AddToDo />
                <FilterComponent />
                <ToDoList />
            </div>
        </TodoContextProvider>
    );
};

export default App;
