import { useState } from 'react';
import LightBulb from './components/LightBulb';

const App = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleLight = () => {
        setIsOn((prev) => !prev);
    };
    return (
        <>
            <button onClick={toggleLight}>Switch</button>
            <LightBulb isOn={isOn} />
        </>
    );
};

export default App;
