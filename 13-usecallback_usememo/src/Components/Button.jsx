import { memo } from "react";

const Button = memo(({name, handleClick})  => {
    // console.log("Button Render: ", name);

    return (
        <button onClick={handleClick}>{name}</button>
    )
});

export default Button;