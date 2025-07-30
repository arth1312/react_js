import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, updateProduct } from "../Services/Actions/productAction";
import './product.css'

const EditProduct = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { product } = useSelector((state) => state.productReducer);
    const intialState = {
        id: "",
        title: "",
        desc: "",
        price: "",
        category: "",
        image: "",
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
        dispatch(updateProduct(inputForm));
        navigate("/");
    };

    useEffect(() => {
        if (product) {
            setInputForm(product)
        }
    }, [product])

    useEffect(() => {
        if (id) {
            dispatch(getProduct(id));
        }
    }, [id]);
    return (
        <>
            <Container className="add-product-container">
                <h1 className="form-heading">Edit Product</h1>
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
                            >
                                <option>Select Category</option>
                                <option value="Electronics" selected={inputForm.category == "Electronics"}>Electronics</option>
                                <option value="Fashion" selected={inputForm.category == "Fashion"}>Fashion</option>
                                <option value="Mobiles" selected={inputForm.category == "Mobiles"}>Mobiles</option>
                                <option value="Appliances" selected={inputForm.category == "Appliances"}>Appliances</option>
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
                            />
                        </Col>
                    </Form.Group>

                    <Button type="submit" className="submit-btn">Update Product</Button>
                </Form>
            </Container>
        </>
    );
};

export default EditProduct;