import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router";

const Header = () => {
    return (
        <>
            <Navbar className="bg-dark mb-5">
                <Container>
                    <Navbar.Brand href="/" className="text-white">FlipKart</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Link to={"/add-product"} className="text-decoration-none text-white">Add Product</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};


export default Header;