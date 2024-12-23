const Counter = ({ state, setter }) => {
    return (
        <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
            <button onClick={() => setter((prev) => prev - 1)}>-</button>
            <span>{state}</span>
            <button onClick={() => setter((prev) => prev + 1)}>+</button>
        </div>
    );
};

export default Counter;
