import { Button, Row, Form, Col } from "react-bootstrap";

const AddProduct = () => {
    return (
        <>
            <h1>Add product</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        Title
                    </Form.Label>
                    <Col sm="6">
                        <Form.Control type="text" placeholder="Enter Title" name="title" value={inputForm.title} onChange={handleChanged} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        Description
                    </Form.Label>
                    <Col sm="6">
                        <Form.Control type="text" placeholder="Enter Description" name="desc" value={inputForm.desc} onChange={handleChanged} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        Price
                    </Form.Label>
                    <Col sm="6">
                        <Form.Control type="number" placeholder="Enter Price" name="price" value={inputForm.price} onChange={handleChanged} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        Category
                    </Form.Label>
                    <Col sm="6">
                        <Form.Select aria-label="Default select example" name="category" onChange={handleChanged}>
                            <option>Select Category</option>
                            <option value="Electronics" selected={inputForm.category == "Electronics"}>Electronics</option>
                            <option value="Fashion" selected={inputForm.category == "Fashion"}>Fashion</option>
                            <option value="Mobiles" selected={inputForm.category == "Mobiles"}>Mobiles</option>
                            <option value="Home Appliances" selected={inputForm.category == "Home Appliances"}>Home Appliances</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        Image
                    </Form.Label>
                    <Col sm="6">
                        <Form.Control type="text" placeholder="Enter Image URL" name="image" value={inputForm.image} onChange={handleChanged} />
                    </Col>
                </Form.Group>

                <Button type="submit">Add Product</Button>
            </Form>
        </>
    )
}
export default AddProduct;