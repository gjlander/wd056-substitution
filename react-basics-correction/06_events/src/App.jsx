// You can work here or download the template
// Your components go here

const App = () => {
    const handleClick = () => alert("You've been alerted!");
    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            <br />
            <input onChange={(e) => console.log(e.target.value)} type='text' />
        </div>
    );
};

export default App;
