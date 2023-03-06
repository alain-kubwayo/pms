import { useState } from "react";

const UseStateComponent = () => {
    const [count, setCount] = useState(()=>{
        // console.log('run function');
        return 4;
    });

    const [state, setState] = useState({count: 4, theme: 'blue'});

    const decrement = () => {
        setState(prevState => {
            return {...prevState, count: prevState.count - 1}
        })
    }

    const increment = () => {
        setState(prevState => {
            return {...prevState, count: prevState.count + 1};
        })
    }

    return ( 
        <div className="w-1/3 mx-auto my-4 space-x-6 text-4xl">
            <button onClick={decrement}>-</button>
            <span>{state.count}</span>
            <button onClick={increment}>+</button>
        </div>
    );
}
 
export default UseStateComponent;