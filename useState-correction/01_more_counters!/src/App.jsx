import { useState } from 'react';
import Counter from './components/Counter';

const App = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    return (
        <div>
            <Counter state={count1} setter={setCount1} />
            <Counter state={count2} setter={setCount2} />
            <Counter state={count3} setter={setCount3} />
        </div>
    );
};

export default App;
