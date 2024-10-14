import { useState } from 'react';

const ProofOfLocality = () => {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
            {counter}
            <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
            <br />
        </>
    );
};

export default ProofOfLocality;
