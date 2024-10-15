import { useState } from 'react';

const PassingAnUpdater = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter((prev) => prev + 1);
        setCounter((prev) => prev + 1);
        setCounter((prev) => prev + 1);
    };

    return (
        <>
            <h2>Passing an updater</h2>
            <p>
                Say you want to increase by 3. We will simulate 3 distinct
                calls:
            </p>
            {counter}
            <button onClick={handleClick}>+</button>
        </>
    );
};
export default PassingAnUpdater;
