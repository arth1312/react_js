import { useState } from "react";

const ControlledComp = () => {

    const [name, setFname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);
    }

    return (
        <>
            <h1>Controlled Component</h1>
            <form onSubmit={handelSubmit}>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setFname(e.target.value)}/>
                <br />
                <br />
                <label>Email:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <br />
                <br />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default ControlledComp;