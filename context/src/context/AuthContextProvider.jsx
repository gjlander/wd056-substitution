import { useState } from 'react';
import { AuthContext } from './authContext';

function AuthContextProvider({ children }) {
    const [user, setUser] = useState();

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
