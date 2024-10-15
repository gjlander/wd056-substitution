import { useState } from 'react';

const SettingValueDirectly = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
        setCounter(counter + 1);
        setCounter(counter + 1);
    };

    return (
        <>
            <h2>Setting value directly</h2>
            <p>
                Say you want to increase by 3. We will simulate 3 distinct
                calls:
            </p>
            {counter}
            <button onClick={handleClick}>+</button>
        </>
    );
};
export default SettingValueDirectly;
