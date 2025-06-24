import { useRef } from "react";

const UnControlledComp = () => {

    const fnameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        
        console.log("Full name:", fnameRef.current.value);
        console.log("Email:", emailRef.current.value);
        console.log("Password:", passwordRef.current.value);
        
    }

    return (
        <>
            <h1>UnControlled Component</h1>
            <form onSubmit={handelSubmit}>
                <label>Name:</label>
                <input type="text" ref={fnameRef} />
                <br />
                <br />
                <label>Email:</label>
                <input type="text" ref={emailRef} />
                <br />
                <br />
                <label>Password:</label>
                <input type="password" ref={passwordRef} />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default UnControlledComp;