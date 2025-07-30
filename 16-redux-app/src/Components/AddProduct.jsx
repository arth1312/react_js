import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router";
import generateUniqueId from "generate-unique-id";
import { useDispatch } from "react-redux";
import { addProduct } from "../Services/Actions/productAction";
import './product.css'

const AddProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const intialState = {
        id: "",
        title: "",
        desc: "",
        price: "",
        category: "",
        image: "",
    };
    const [inputForm, setInputForm] = useState(intialState);

    const [errors, setErrors] = useState({
        id: "",
        title: "",
        desc: "",
        price: "",
        category: "",
        image: "",
    });

    const validate = () => {
        const newErrors = { ...errors };
        let isValid = true;

        if (!inputForm.title) {
            newErrors.title = "Title is required.";
            isValid = false;
        } else {
            newErrors.title = "";
        }

        if (!inputForm.desc) {
            newErrors.desc = "Description is required.";
            isValid = false;
        } else {
            newErrors.desc = "";
        }

        if (!inputForm.price) {
            newErrors.price = "Price is required.";
            isValid = false;
        } else {
            newErrors.gender = "";
        }

        if (!inputForm.category) {
            newErrors.category = "Categort date is required.";
            isValid = false;
        } else {
            newErrors.category = "";
        }

        if (!inputForm.image) {
            newErrors.image = "Image is required.";
            isValid = false;
        } else {
            newErrors.image = "";
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChanged = (e) => {
        const { name, value } = e.target;
        setInputForm({
            ...inputForm,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        let id = generateUniqueId({ length: 6, useLetters: false });
        inputForm.id = id;

        dispatch(addProduct(inputForm));
        navigate("/");
    };
    return (
        <>
            <Container className="add-product-container">
                <h1 className="form-heading">Add New Product</h1>
                <Form className="product-form mt-4" onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="form-row mb-3">
                        <Form.Label column sm="2" className="form-label">
                            Title
                        </Form.Label>
                        <Col sm="10" className="form-input-col">
                            <Form.Control
                                className="form-control-input"
                                type="text"
                                placeholder="Enter Title"
                                name="title"
                                value={inputForm.title}
                                onChange={handleChanged}
                                isInvalid={!!errors.title}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="form-row mb-3">
                        <Form.Label column sm="2" className="form-label">
                            Description
                        </Form.Label>
                        <Col sm="10" className="form-input-col">
                            <Form.Control
                                className="form-control-input"
                                type="text"
                                placeholder="Enter Description"
                                name="desc"
                                value={inputForm.desc}
                                onChange={handleChanged}
                                isInvalid={!!errors.desc}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="form-row mb-3">
                        <Form.Label column sm="2" className="form-label">
                            Price
                        </Form.Label>
                        <Col sm="10" className="form-input-col">
                            <Form.Control
                                className="form-control-input"
                                type="number"
                                placeholder="Enter Price"
                                name="price"
                                value={inputForm.price}
                                onChange={handleChanged}
                                isInvalid={!!errors.price}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="form-row mb-3">
                        <Form.Label column sm="2" className="form-label">
                            Category
                        </Form.Label>
                        <Col sm="10" className="form-input-col">
                            <Form.Select
                                className="form-select-input"
                                aria-label="Default select example"
                                name="category"
                                onChange={handleChanged}
                                isInvalid={!!errors.category}
                            >
                                <option>Select Category</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Fashion">Fashion</option>
                                <option value="Mobiles">Mobiles</option>
                                <option value="Appliances">Appliances</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="form-row mb-3">
                        <Form.Label column sm="2" className="form-label">
                            Image
                        </Form.Label>
                        <Col sm="10" className="form-input-col">
                            <Form.Control
                                className="form-control-input"
                                type="text"
                                placeholder="Enter Image URL"
                                name="image"
                                value={inputForm.image}
                                onChange={handleChanged}
                                isInvalid={!!errors.image}
                            />
                        </Col>
                    </Form.Group>

                    <Button type="submit" className="submit-btn">Add Product</Button>
                </Form>
            </Container>
        </>
    );
};

export default AddProduct;