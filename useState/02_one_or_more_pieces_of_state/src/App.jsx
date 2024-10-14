import WithMoreThanOnePieceOfState from './components/WithMoreThanOnePieceofState';
import ProofOfLocality from './components/ProofOfLocality';

const App = () => {
    return (
        <>
            <h2>
                You can have more than one piece of state in your components
            </h2>
            <WithMoreThanOnePieceOfState />
            <h2>
                Every instance of <code>ProofOfLocality</code> has its own piece
                of state
            </h2>
            <ProofOfLocality />
            <ProofOfLocality />
            <ProofOfLocality />
            <ProofOfLocality />
        </>
    );
};

export default App;
