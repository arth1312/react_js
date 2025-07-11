import { Link } from 'react-router'

const Header = () => {
    return (
        <>
            <Link to={"/"}>controllcomp</Link> &nbsp;&nbsp;
            <Link to={"/uncontrollcomp"}>uncontrollcomp</Link> &nbsp;&nbsp;
            <Link to={"/counter"}>counter</Link> &nbsp;&nbsp;
            <Link to={"/events"}>events</Link> &nbsp;&nbsp;
            <Link to={"/validation"}>validation</Link>
        </>
    )
}
export default Header;