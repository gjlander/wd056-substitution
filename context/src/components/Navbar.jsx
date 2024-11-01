import { useAuth } from '../context/authContext';

const Navbar = () => {
    const { user, setUser } = useAuth();
    return (
        <div className='navbar sticky top-0 z-50 bg-primary'>
            <div className='navbar-start'>
                <a className='btn btn-ghost text-xl' href='/'>
                    FakeStore
                </a>
            </div>

            <div className='navbar-end gap-4'>
                {user ? (
                    <>
                        <p>Welcome back, {user.name}</p>
                        <button onClick={() => setUser(null)} className='btn'>
                            Sign Out
                        </button>
                    </>
                ) : (
                    <button
                        onClick={() => {
                            setUser({
                                name: 'Aang',
                            });
                        }}
                        className='btn'
                    >
                        Sign In
                    </button>
                )}
            </div>
        </div>
    );
};
export default Navbar;
