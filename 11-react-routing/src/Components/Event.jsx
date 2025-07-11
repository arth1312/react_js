import { useState } from "react";

const Events = () => {

    const [count, setCount] = useState(0);
    const handelClick = (name) => {
        console.log("Button Clicked =>", name);
        setCount(count + 1);
    }

    const handelMouseOver = () => {
        console.log("Mouse Over");
    }

    const handelMouseLeave = () => {
        console.log("Mouse Leave"); 
    }

    return (
        <div>
            <h1 onMouseEnter={handelMouseOver} onMouseLeave={handelMouseLeave}>Mouse over and Mouse leave</h1>
            { count > 0 ? <ul>
                            <li>Hello World...</li>
                            <li>Red & White..</li>
                            <li>ReactJS.</li>
                          </ul> : <p>Count value is zero</p> }
            <button style={{color: "red"}} onClick={() => handelClick("Arth Koradiya")}>Click</button>
        </div>
    )
}

export default Events