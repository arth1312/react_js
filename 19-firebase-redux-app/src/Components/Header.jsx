import { Button, Container, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { logOutAsync } from "../Services/Actions/userAction";

const Header = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.userReducer);
    const handleLogOut = () => {
        dispatch(logOutAsync());
    }
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
                    {
                        user ? <>
                            <span>{user.email}</span> &nbsp;&nbsp;&nbsp;<Button onClick={handleLogOut}>LogOut</Button>
                        </>
                            :
                            <Link className="btn btn-warning" to={"/signIn"}>
                                SignIn
                            </Link>
                    }
                </Container>
            </Navbar>
        </>
    );
};

export default Header;