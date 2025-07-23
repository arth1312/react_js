import { createContext } from "react";
import CompB from "./CompB";

export const userContext = createContext();

const CompA = () => {
    let user = {
        name: "Arth Koradiya",
        age: 20,
        email: "arth@herbal.in"
    }
    let count = 131
    return (
        <>
           <userContext.Provider value={{user: user, counter: count}}>
                <h1>Component A</h1>
                <p>User Name: {user.name}</p>
                <p>user Email: {user.email}</p>
                <CompB />
           </userContext.Provider>
        </>
    )
}
export default CompA;