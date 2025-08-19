import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router";

const Header = () => {
    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">FlipKart</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-center">
                        <Navbar.Text>
                            <Link to={"/add-product"}>Add Product</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                    <Link className="px-3" to={"/signIn"}>SignIn</Link>
                </Container>
            </Navbar>
        </>
    );
};


export default Header;