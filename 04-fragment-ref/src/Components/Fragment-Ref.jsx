import { Fragment, useRef } from "react";

const FragmentRefs = () => {
    let inputRef = useRef()
    const handelClick = () => {
        console.log("Button clicked", inputRef.current.value);
    }
    return (
        <Fragment>
            <h1>Fragment & Ref</h1>
            <input type="text" ref={inputRef} />
            <button onClick={handelClick}>Click</button>
        </Fragment>
    )
}
export default FragmentRefs;