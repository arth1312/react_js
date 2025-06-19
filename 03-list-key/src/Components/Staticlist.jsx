import { useState } from "react";

const Staticlist = ({list}) => {
    return (
        <div>
            <h1>Static List</h1>
            <li>{list[0]}</li>
            <li>{list[1]}</li>
            <li>{list[2]}</li>
            <li>{list[3]}</li>
            <li>{list[4]}</li>
        </div>
    )
}
export default Staticlist;