import { useState, useMemo, useEffect } from 'react'

const UseMemoComponent = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number]);
    const themeStyles = useMemo(()=>{
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        }
    }, [dark])
    // state change leads to the whole component re-render. When you have a slow function, it causes performance issues. React uses useMemo hook when you have these kinda slow functions that do not change that often. (Memoization => caching a value so you don't have to recompute it every single time)

    // Why not memoize everything? well, it gives you some performance overheads and some memory overhead. Calling an additional function (useMemo()) and since it's saving the value (prev Value) in some memory variable. so, you are forcing your memory to get larger everytime you use memo because you have an additional variable in memory to store that previous value. Hence, only use it when need performance benefits, when func. calling is incredibly slow. 

    // another use case: referential equality: two objects are not equal. 
    useEffect(() => {
        console.log('theme changed');
    }, [themeStyles]) // new themeStyles object is recreated everytime component re-renders and hence, useMemo can help persist these objects. To make sure that the reference of an object/array is exactly the same as it was the last time you rendered, useMemo helps to ensure that you only update the reference of that object whenever the actual contents of the object change instead of updating it every single time you render.
    return ( 
        <>
            <hr />
            <input 
                type="number" 
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))}
                className="px-2 py-1 border-2 border-sky-900 outline-none"
            />
            <button 
                onClick={() => setDark(prevDark => !prevDark)}
            >Change Theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </>
    );
}
 
export default UseMemoComponent;

const slowFunction = num => {
    console.log('calling slow function')
    for(let i = 0; i < 1000000000; i++){}
    return num * 2;
}