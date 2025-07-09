import './BookData.css';
import { Badge, Button, Card } from "react-bootstrap";

const BookDetail = ({ product, handleDelete, handleEdit }) => {
    return (
        <Card className="book-card">
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title className="book-title">
                    {product.title} - {product.id}
                </Card.Title>
                <Card.Text className="book-desc">
                    {product.desc}
                </Card.Text>
                <Badge bg="warning">{product.category}</Badge>
                <div className="btn-group">
                    <Button onClick={() => handleEdit(product.id)} variant="warning">Edit</Button>
                    <Button onClick={() => handleDelete(product.id)} variant="danger">Delete</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default BookDetail;
