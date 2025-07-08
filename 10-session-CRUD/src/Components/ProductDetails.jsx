import { Badge, Button, Card } from "react-bootstrap"
import './ProductDetails.css'

const ProductDetail = ({ product }) => {
    return (
        <Card style={{ width: '18rem' }} className="shadow-sm rounded border-0 ms-4 mt-5">
            <Card.Img
                variant="top"
                src={product.image}
                style={{ height: '250px', width: '250px', objectFit: 'cover', padding: '20px' }}
            />
            <Card.Body>
                <Card.Title className="fw-bold">{product.title}</Card.Title>
                <Card.Text style={{ minHeight: '80px' }}>
                    {product.desc}
                </Card.Text>
                <Badge bg="warning" text="dark">
                    {product.category}
                </Badge>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>
    )
}


export default ProductDetail;