const WithoutState = () => {
    let counter = 0;

    return (
        <>
            <h2>Without state</h2>
            <button onClick={() => counter--}>-</button>
            {counter}
            <button onClick={() => counter++}>+</button>
        </>
    );
};

export default WithoutState;
