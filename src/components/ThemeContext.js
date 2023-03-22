import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemContextProvider = ( { children } ) => {
    const [isLightTheme, setIsLightTheme] = useState();
    const [light, setLight] = useState({ 
        syntax: '#555',
        ui: '#ddd',
        bg: '#eee'
    });
    const [dark, setDark] = useState({
        syntax: '#ddd',
        ui: '#333',
        bg: '#555'
    })

    return (
        <ThemeContext.Provider>
            { children }
        </ThemeContext.Provider>
    );
}
