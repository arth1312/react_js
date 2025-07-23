import { useContext } from "react";
import { userContext } from "./CompA";

const CompD = () => {
    const {user}  = useContext(userContext)
    return (
        <>
            <h1>Component D</h1>
            <p>User Age:{user.age} </p>
        </>
        
    )
}
export default CompD;