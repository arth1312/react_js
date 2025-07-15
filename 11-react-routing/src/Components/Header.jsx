import { Link, useNavigate } from 'react-router'

const Header = () => {

    const navigate = useNavigate();

    const handleAbout = (data) => {
        let name = "Arth Koradiya"
        navigate(`/counter/${data}`)
        console.log(name);
        
    }

    return (
        <>
            <Link to={"/"} className='text-decoration-none'>controllcomp</Link> &nbsp;&nbsp;
            <Link to={"/uncontrollcomp"} className='text-decoration-none'>uncontrollcomp</Link> &nbsp;&nbsp;
            <Link to={"/counter"} className='text-decoration-none'>counter</Link> &nbsp;&nbsp;
            <Link to={"/events"} className='text-decoration-none'>events</Link> &nbsp;&nbsp;
            <Link to={"/validation"} className='text-decoration-none'>validation</Link>

            <button onClick={()=> handleAbout("hello")}>counter</button>
            <button>events</button>
        </>
    )
}
export default Header;