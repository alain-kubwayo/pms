import { useTheme, useThemeUpdate } from "../ThemeContext";

const UseContextComponent = () => {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();

    return ( 
        <>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div className={`h-48 w-48 ${darkTheme ? 'bg-sky-900 text-white font-bold' : 'bg-blue-400 text-black font-extrabold'}`}>Employees</div>
        </>
    );
}
 
export default UseContextComponent;