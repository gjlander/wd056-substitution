import AuthContextProvider from './context/AuthContextProvider';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
    return (
        <AuthContextProvider>
            <div className='flex flex-col min-h-screen'>
                <Navbar />
                <main className='grow'>
                    <Home />
                </main>
                <Footer />
            </div>
        </AuthContextProvider>
    );
}

export default App;
