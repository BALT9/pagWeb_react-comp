import { useState } from "react";

function Serie2(){
    const[v,setV] = useState([]);

    function serie(){
        let nuevoV = [];
        let n = prompt("n: ");
        let a = 0;
        for(let i=1; i<=n; i++){
            a = i*3;
            nuevoV.push(a);
        }
        setV(nuevoV);
    }


    return(
        <>
           <button onClick={serie}>Multiplos de 3</button>
           <h1>{v.join(",")}</h1>
           <p>serie Multiplos de 3</p>
        </>
    )
}
export default Serie2;