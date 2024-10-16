import ShowMultiplier from './ShowMultiplier';
const IncreaseByN = ({ multiplier, setCounter }) => {
    return (
        <div>
            <button onClick={() => setCounter((prev) => prev + multiplier)}>
                Click to increase by {multiplier}
            </button>
            <ShowMultiplier multiplier={multiplier} />
        </div>
    );
};

export default IncreaseByN;
