import WithState from './components/WithState';
import WithoutState from './components/WithoutState';

const App = () => {
    return (
        <>
            <WithoutState />
            <br />
            <WithState />
        </>
    );
};

export default App;
