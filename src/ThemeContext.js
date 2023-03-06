import React, { useContext, useState } from 'react';

export const ThemeContext = React.createContext();
export const ThemeUpdateContext = React.createContext();

export const useTheme = () => useContext(ThemeContext);
export const useThemeUpdate = () => useContext(ThemeUpdateContext);

export const ThemeProvider = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(true);
    const toggleTheme = () => setDarkTheme(prevDarkTheme => !prevDarkTheme);  
    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )  
}