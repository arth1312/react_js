import { useReducer, useState } from "react";
import { counterReducer } from "./CounterReducer";

const CounterApp = () => {

    // const [count , setCount] = useState(0)
    const [count, dispatch] = useReducer(counterReducer, 0)

    const handelInc = () => {
        // setCount(count => count + 1)
        dispatch({
            type: "INC"
        })
    }

    const handelDec = () => {
        // setCount(count => count - 1)
        dispatch({
            type: "DEC"
        })
    }
    return (
        <>
            <h1>Counter App: {count}</h1>
            <button className="me-3 mt-5 border-0 py-3 px-4 rounded bg-dark text-white" onClick={handelInc}>Increment</button>
            <button className="mt-5 border-0 py-3 px-4 rounded bg-dark text-white" onClick={handelDec}>Decrement</button>
        </>
    )
};
export default CounterApp;