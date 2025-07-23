import { useContext } from "react";
import CompD from "./CompD";
import { userContext } from "./CompA";

const CompC = () => {
    const {user, counter} = useContext(userContext)
    return (
       <>
            <h1>Component C</h1>
            <p>{counter}</p>
            <CompD  />
       </>
    )
}
export default CompC;