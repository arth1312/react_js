import { Link } from 'react-router'

const Header = () => {
    return (
        <>
            <Link to={"/"} className='text-decoration-none'>controllcomp</Link> &nbsp;&nbsp;
            <Link to={"/uncontrollcomp"} className='text-decoration-none'>uncontrollcomp</Link> &nbsp;&nbsp;
            <Link to={"/counter"} className='text-decoration-none'>counter</Link> &nbsp;&nbsp;
            <Link to={"/events"} className='text-decoration-none'>events</Link> &nbsp;&nbsp;
            <Link to={"/validation"} className='text-decoration-none'>validation</Link>
        </>
    )
}
export default Header;