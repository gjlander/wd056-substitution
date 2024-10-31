import Home from './components/Home';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
    const [user, setUser] = useState();

    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar user={user} setUser={setUser} />
            <main className='grow'>
                <Home user={user} />
            </main>
            <Footer />
        </div>
    );
}

export default App;
