import { useState } from 'react';

const WithState = () => {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <h2>With state</h2>
            <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
            {counter}
            <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
        </>
    );
};

export default WithState;
