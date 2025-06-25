import { useState } from 'react';
import './Validation.css';

const ValidationComp = () => {
    const [inputForm, setinputForm] = useState({
        fname: "",
        email: "",
        password: "",
        mobileNo: ""
    })

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted => ", inputForm);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setinputForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    }

    return (
        <>
            <h1>Validation Component</h1>
            <form onSubmit={handelSubmit}>
                <label>Name:</label>
                <input type="text" name='fname' value={inputForm.fname} onChange={handleChange} />
                <br />
                <br />
                <label>Email:</label>
                <input type="text" name='email' value={inputForm.email} onChange={handleChange} />
                <br />
                <br />
                <label>Password:</label>
                <input type="password" name='password' value={inputForm.password} onChange={handleChange} />
                <br />
                <br />
                <label>MobileNo:</label>
                <input type="text" name='mobileNo' value={inputForm.mobileNo} onChange={handleChange} />
                <br />
                <br />
                <button>Register</button>
            </form>
        </>
    )
};
export default ValidationComp;