import { useState } from "react";

function Serie1(){
    
    const[v,setV] = useState([]);

    function serie(){
        let nuevoV = [];
        let n = prompt("n: ");
        let a = 0;
        for(let i=1; i<=n; i++){
            a = a+2;
            nuevoV.push(a);
        }
        setV(nuevoV);
    }

    return(
        <>
            <button onClick={serie}>serie impar</button>
            <h1>{v.join(",")}</h1>
            <p>serie de numeros impares</p>


        </>
    )
}
export default Serie1;