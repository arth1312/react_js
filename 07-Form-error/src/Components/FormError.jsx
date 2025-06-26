import { useState } from "react";

const Validation = () => {
    const initialForm = {
        fname: "",
        email: "",
        password: "",
        mobileNo: ""
    }

    const [inputForm, setinputForm] = useState(initialForm)

    const [errorList, setErrorList] = useState({});

    const handelSubmit = (e) => {
        e.preventDefault();
        if(formValidation()) {
            console.log("Form submitted => ", inputForm);
            setinputForm(initialForm);
        }
        else {
            console.log("Error in form submission");
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setinputForm({
            ...inputForm,
            [name]: value
        });
    }

    const formValidation = () => {
        let FormError ={};
        if(inputForm.fname == "") {
            FormError.fnameErr = "Name is required";
        }

        if(inputForm.email == "") {
            FormError.emailErr = "Email is required";
        }
        else if(!inputForm.email.includes("@")) {
            FormError.emailErr = "Email is not valid include @";
        }
        if(inputForm.password == "") {
            FormError.passwordErr = "Password is required";
        }

        if(inputForm.mobileNo == "") {
            FormError.mobileNoErr = "Mobile number is required";
        }
        else if(inputForm.mobileNo.length < 10) {
            FormError.mobileNoErr = "Mobile number must be 10 digits";
        }

        setErrorList(FormError);
        console.log("length: ", Object.keys(FormError));
        return Object.keys(FormError).length == 0 ? true : false;
    }

    return (
        <>
            <h1>Validation Component</h1>
            <form onSubmit={handelSubmit}>
                <label>Name: </label>
                <input type="text" name='fname' value={inputForm.fname} onChange={handleChange} />
                {errorList.fnameErr ? <i>{errorList.fnameErr}</i> : "" }
                <br />
                <br />
                <label>Email: </label>
                <input type="text" name='email' value={inputForm.email} onChange={handleChange} />
                {errorList.emailErr ? <i>{errorList.emailErr}</i> : "" }
                <br />
                <br />
                <label>Password: </label>
                <input type="password" name='password' value={inputForm.password} onChange={handleChange} />
                {errorList.passwordErr ? <i>{errorList.passwordErr}</i> : "" }
                <br />
                <br />
                <label>MobileNo: </label>
                <input type="text" name='mobileNo' value={inputForm.mobileNo} onChange={handleChange} />
                {errorList.mobileNoErr ? <i>{errorList.mobileNoErr}</i> : "" }
                <br />
                <br />
                <button>Register</button>
            </form>
        </>
    )
}
export default Validation;