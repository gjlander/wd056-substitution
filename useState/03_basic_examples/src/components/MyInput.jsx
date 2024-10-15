import { useState } from 'react';

const MyInput = () => {
    const [text, setText] = useState('hello');

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <>
            <input value={text} onChange={handleChange} />
            <p>You typed: {text}</p>
            <button onClick={() => setText('hello')}>Reset</button>
            <br />
        </>
    );
};

export default MyInput;
