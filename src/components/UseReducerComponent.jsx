import { useState, useReducer } from "react";

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

const reducer = (state, action) => {
    switch(action.type){
        case ACTIONS.INCREMENT: 
            return { count: state.count + 1}
        case ACTIONS.DECREMENT: 
            return { count: state.count - 1}
        default: 
            return state
    }

}

const UseReducerComponent = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0})
    // you could pass values directly but objects are better since useReducer tackles more complex state management
    const [count, setCount] = useState(0);

    const increment = () => {
        // setCount(prevCount => prevCount + 1)
        dispatch({ type: ACTIONS.INCREMENT });
    }

    const decrement = () => {
        // setCount(prevCount => prevCount - 1)
        dispatch({ type: ACTIONS.DECREMENT });
    }
    return ( 
        <div className="text-3xl w-1/3 mx-auto my-4 flex space-x-10">
            <button onClick={decrement}>-</button>
            <span>{state.count}</span>
            <button onClick={increment}>+</button>
        </div>
    );
}
 
export default UseReducerComponent;