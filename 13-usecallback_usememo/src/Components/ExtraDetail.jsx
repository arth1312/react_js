import { memo, useMemo } from "react";

const ExtraDetail = memo(() => {
    console.log("Extra Details");
    let total = useMemo(() => {
        let sum = 0;
        for(let i = 1; i <= 84518586; i++){
            sum += i
        }
        return sum;
    })

    return (
        <>
            <h3>Extra Details : {total}</h3>
        </>
    )
});

export default ExtraDetail;