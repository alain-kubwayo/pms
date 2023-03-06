import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();
export const AuthUpdateContext = createContext();

export const useAuthContext = () => useContext(AuthContext);
export const useAuthUpdateContext = () => useContext(AuthUpdateContext);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = () => setIsLoggedIn(prevIsLoggedIn => !prevIsLoggedIn);

    return (
        <AuthContext.Provider value={isLoggedIn}>
            <AuthUpdateContext.Provider value={handleLogin}>
                { children }
            </AuthUpdateContext.Provider>
        </AuthContext.Provider>

    )
}