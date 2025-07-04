import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import './sessionCRUD.css'

const Products = () => {
    const intialState = {
        title: "",
        desc: "",
        price: "",
        category: "",
        image: ""
    }
    const [inputForm, setInputForm] = useState(intialState);

    const handleChanged = (e) => {
        const { name, value } = e.target;
        setInputForm({
            ...inputForm,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Submitted : => ", inputForm);
    }

    return (
        <>
            <Container>
                <h1>Add Product</h1>
                <div className="form-wrapper">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="2">
                                Title
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" placeholder="Enter Title" name="title" value={inputForm.title} onChange={handleChanged} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="2">
                                Description
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" placeholder="Enter Description" name="desc" value={inputForm.desc} onChange={handleChanged} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="2">
                                Price
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="number" placeholder="Enter Price" name="price" value={inputForm.price} onChange={handleChanged} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="2">
                                Category
                            </Form.Label>
                            <Col sm="9">
                                <Form.Select aria-label="Default select example" name="category" onChange={handleChanged}>
                                    <option>Select Category</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Fashion">Fashion</option>
                                    <option value="Mobiles">Mobiles</option>
                                    <option value="Appliances">Appliances</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="2">
                                Image
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" placeholder="Enter Image URL" name="image" value={inputForm.image} onChange={handleChanged} />
                            </Col>
                        </Form.Group>

                        <Button type="submit">Add Product</Button>
                    </Form>
                </div>
            </Container>
        </>
    );
};

export default Products;