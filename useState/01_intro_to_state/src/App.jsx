import WithState from './components/WithState';
import WithoutState from './components/WithoutState';

const App = () => {
    return (
        <>
            <WithoutState />

            <WithState />
        </>
    );
};

export default App;
