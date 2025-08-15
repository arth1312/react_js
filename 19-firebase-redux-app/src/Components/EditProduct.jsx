import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getProductAsync, updateProductAsync } from "../Services/Actions/productAction";
import { uploadImage } from "../Services/imageUpload";

const EditProduct = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { product, isUpdated } = useSelector((state) => state.productReducer);

    const initialState = {
        id: "",
        title: "",
        desc: "",
        price: "",
        category: "",
        image: "",
    };

    const [inputForm, setInputForm] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputForm({
            ...inputForm,
            [name]: value,
        });
    };

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        try {
            const uploadedUrl = await uploadImage(file);
            if (uploadedUrl) {
                setInputForm(prev => ({ ...prev, image: uploadedUrl }));
            } else {
                alert("Image upload failed. Please try again.");
            }
        } catch (error) {
            console.error("Error uploading image:", error);
            alert("Image upload failed. Please try again.");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProductAsync(inputForm));
    };

    useEffect(() => {
        if (isUpdated) {
            navigate("/");
        }
    }, [isUpdated, navigate]);

    useEffect(() => {
        if (product) {
            setInputForm(product);
        }
    }, [product]);

    useEffect(() => {
        if (id) {
            dispatch(getProductAsync(id));
        }
    }, [id, dispatch]);

    return (
        <Container>
            <h1>Edit Product</h1>
            <Form className="mt-4" onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Title
                    </Form.Label>
                    <Col sm="6">
                        <Form.Control
                            type="text"
                            placeholder="Enter Title"
                            name="title"
                            value={inputForm.title}
                            onChange={handleChange}
                            required
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Description
                    </Form.Label>
                    <Col sm="6">
                        <Form.Control
                            type="text"
                            placeholder="Enter Description"
                            name="desc"
                            value={inputForm.desc}
                            onChange={handleChange}
                            required
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Price
                    </Form.Label>
                    <Col sm="6">
                        <Form.Control
                            type="number"
                            placeholder="Enter Price"
                            name="price"
                            value={inputForm.price}
                            onChange={handleChange}
                            min="0"
                            step="0.01"
                            required
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Category
                    </Form.Label>
                    <Col sm="6">
                        <Form.Select
                            aria-label="Select category"
                            name="category"
                            value={inputForm.category}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Mobiles">Mobiles</option>
                            <option value="Appliances">Appliances</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                        Image
                    </Form.Label>
                    <Col sm="6">
                        <Form.Control
                            type="file"
                            accept="image/*"
                            onChange={handleFileUpload}
                        />
                    </Col>
                </Form.Group>

                <Button type="submit" variant="primary">
                    Update Product
                </Button>
            </Form>
        </Container>
    );
};

export default EditProduct;