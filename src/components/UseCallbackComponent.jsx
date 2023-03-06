import { useState, useCallback } from "react";
import List from "./List";

const UseCallbackComponent = () => {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    const getItems = useCallback(() => {
        return [number, number + 1, number + 2]
    }, [number])

    // similar to useMemo but for functions. Difference is that useCallback sets getItems to the entire function while with useMemo sets it to the return value of the function

    // only reason to use useCallback and useMemo is when you will have to worry about inferential equality. You don't need to create object/function unless you need to

    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333'
    }

    return ( 
        <div style={theme}>
            <input 
                type="number" 
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))}
                className="px-2 py-1 border-2 border-sky-900 outline-none"
            />
            <button onClick={() => setDark(prevDark => !prevDark)}>Toggle Theme</button>
            <List getItems={getItems} />
        </div>
    );
}
 
export default UseCallbackComponent;