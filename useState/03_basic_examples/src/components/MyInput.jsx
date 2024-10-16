import { useState } from 'react';

const MyInput = () => {
    const [text, setText] = useState('');
    return (
        <>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <p>You typed: {text}</p>
            <button onClick={() => setText('')}>Reset</button>
            <br />
        </>
    );
};

export default MyInput;
