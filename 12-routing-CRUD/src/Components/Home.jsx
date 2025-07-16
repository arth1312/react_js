import { useEffect, useState } from "react";
import { getStorageData, setStorageData } from "../Services/storageData";
import { Badge, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";

const Home = () => {
    const [productData, setProductData] = useState([]);
    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(`/edit-product/${id}`);
    }

    const handleDelete = (id) => {
        let data = getStorageData();
        let updateData = data.filter(product => product.id != id)
        // console.log(updateData);
        setStorageData(updateData);
        setProductData(updateData);
    }

    useEffect(() => {
        let data = getStorageData();
        setProductData(data);
    }, []);
    return (
        <>
            <h1>Home</h1>
            <div className="d-flex">
                {productData.map((product) => (
                    <Card style={{ width: "18rem", margin: "10px" }}>
                        <Card.Img variant="top" src={product.image} />
                        <Card.Body>
                            <Card.Title className="text-center">
                                {product.title}
                            </Card.Title>
                            <Card.Text>{product.desc}</Card.Text>
                            <Card.Text>{product.price}</Card.Text>
                            <Badge bg="warning">{product.category}</Badge>
                            <br />
                            <br />
                            <br />
                            <Button onClick={() => handleEdit(product.id)} variant="warning">
                                Edit
                            </Button>{" "}
                            &nbsp;&nbsp;
                            <Button onClick={() => handleDelete(product.id)} variant="danger">
                                Delete
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
    );
};

export default Home;