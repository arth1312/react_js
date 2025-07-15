import { useEffect, useState } from "react";
import { useParams } from "react-router";


const Counter = () => {

    const { name } = useParams()

    const [count, setCount] = useState(0);

    const handalClick = () => {
        setCount(count => count + 1)
    }

    const handalDec = () => {
        setCount(count => count - 1)
    }

    // Everytime
    // useEffect(() => {
    //     console.log("Mouting");
    // })

    // Only Once
    // useEffect(() => {
    //     console.log("Only Once Mouting");
    // }, [])

    // Updation
    useEffect(() => {
        console.log("Updation Mouting");
    }, [count])

    return (
        <div>
            <h1>Counter App : {count}</h1> {name}
            <button onClick={handalClick}>Increment</button>
            <button onClick={handalDec}>Decrement</button>
        </div>
    )
}
export default Counter