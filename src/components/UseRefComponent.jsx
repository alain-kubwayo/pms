import { useState, useEffect, useRef } from "react";

const UseRefComponent = () => {
    const [name, setName] = useState("");
    const renderCount = useRef(0);
    const inputRef = useRef();


    
    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    })

    const focus = () => {
        console.log(inputRef.current);
        inputRef.current.focus();
    }

    // ! Don't use refs for states
    // ! append a child, adding, removing child: should be done with React - JSX and do not do that with refs

    // refs can be used to store values persistent across renders and commonly used to reference input elements or other DOM elements on the page.
    
    // To store previous value of the state.

    const prevName = useRef('')

    useEffect(() => {
        prevName.current = name;
    }, [name])

    return ( 
        <>
            <hr />
            <input 
                className="border border-sky-700 px-2 py-1 outline-none" type="text" 
                value={name} 
                onChange={e => setName(e.target.value)} 
                ref={inputRef}
            /> 
            <div>My name is: {name} and it used to be {prevName.current}</div>
            <div>I rendered {renderCount.current} times</div>
            <button onClick={focus}>Focus</button>
        </>
    );
}
 
export default UseRefComponent;