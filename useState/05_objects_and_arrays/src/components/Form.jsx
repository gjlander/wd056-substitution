import { useState } from 'react';

const Form = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });
    const [input, setInput] = useState('');
    const [myArray, setMyArray] = useState(['item']);

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = () => {
        setMyArray((prev) => [...prev, input]);
    };

    return (
        <>
            <label>
                First name:
                <input
                    name='firstName'
                    value={form.firstName}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Last name:
                <input
                    name='lastName'
                    value={form.lastName}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                />
            </label>
            <br />
            <textarea
                name='message'
                value={form.message}
                onChange={handleChange}
            />
            <p>
                {form.firstName} {form.lastName} {form.email} {form.message}
            </p>
            <label>
                Add to array
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </label>
            <button onClick={handleClick}>Add text to list</button>
            <ul>
                {myArray.map((item) => (
                    <li key={crypto.randomUUID()}>{item}</li>
                ))}
            </ul>
        </>
    );
};

export default Form;
