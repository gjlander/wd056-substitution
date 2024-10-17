import { useState } from 'react';
const App = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        tel: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        // setForm({ ...form, [name]: value });
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.tel || !form.message) {
            alert('All fields required!');
        }

        console.log(form);
        setForm({
            name: '',
            email: '',
            tel: '',
            message: '',
        });
    };
    return (
        <div>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    maxWidth: '500px',
                }}
            >
                <label>
                    Name:
                    <input
                        onChange={handleChange}
                        value={form.name}
                        name='name'
                        type='text'
                    />
                </label>
                <label>
                    Email:
                    <input
                        onChange={handleChange}
                        value={form.email}
                        name='email'
                        type='text'
                    />
                </label>
                <label>
                    Telephone:
                    <input
                        onChange={handleChange}
                        value={form.tel}
                        name='tel'
                        type='text'
                    />
                </label>
                <label>
                    Message:
                    <textarea
                        onChange={handleChange}
                        value={form.message}
                        name='message'
                    />
                </label>
                <button type='submit'>Send</button>
            </form>
        </div>
    );
};

export default App;
