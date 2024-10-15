import { useState } from 'react';

const WithMoreThanOnePieceOfState = () => {
    const [state1, setState1] = useState(0);
    const [state2, setState2] = useState('hello');
    return (
        <span>
            {state1} {state2}
        </span>
    );
};

export default WithMoreThanOnePieceOfState;
