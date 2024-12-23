import { useState } from 'react';

import IncreaseByN from './components/IncreaseByN';
import DisplayWithMessage from './components/DisplayWithMessage';
import Reset from './components/Reset';

const App = () => {
    const [counter, setCounter] = useState(0);
    const [multiplier, setMultiplier] = useState(1);

    return (
        <>
            <button onClick={() => setMultiplier((prev) => prev + 1)}>
                Increase multiplier
            </button>
            <IncreaseByN multiplier={multiplier} setCounter={setCounter} />
            <DisplayWithMessage counter={counter} />
            <Reset setCounter={setCounter} setMultiplier={setMultiplier} />
        </>
    );
};

export default App;
