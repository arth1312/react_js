import { Link } from "react-router";

const Header = () => {
    return (
        <>
            <Link to={"/"}>Home</Link> &nbsp;&nbsp;
            <Link to={"/about"}>about</Link> &nbsp;&nbsp;
            <Link to={"/contact"}>contact</Link> &nbsp;&nbsp;
            <Link to={"/service"}>service</Link> &nbsp;&nbsp;
        </>
    )
}
export default Header;