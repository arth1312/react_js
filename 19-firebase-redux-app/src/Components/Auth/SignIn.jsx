import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router";

const SignIn = () => {
    const intialState = {
        email: "",
        password: "",
    };
    const [inputForm, setInputForm] = useState(intialState);


    const handleChanged = (e) => {
        const { name, value } = e.target;
        setInputForm({
            ...inputForm,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Submit");
    };
    return (
        <>
            <Container className="mt-3">
                <h2>Sign IN Form</h2>
                <Form className="mt-4" onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control
                                type="text"
                                placeholder="Enter Email"
                                name="email"
                                value={inputForm.email}
                                onChange={handleChanged}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Password
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control
                                type="password"
                                placeholder="Enter Password"
                                name="password"
                                value={inputForm.password}
                                onChange={handleChanged}
                            />
                        </Col>
                    </Form.Group>
                    <Button type="submit">Sign IN</Button>
                </Form>
                <p>Create an Account ? <Link className="" to={"/signUp"}>SignUP</Link> </p>
            </Container>
        </>
    );
};

export default SignIn;