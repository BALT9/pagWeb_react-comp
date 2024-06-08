import { useState } from "react";

function Serie1form(){
    const[v,setV] = useState([]);
    const[n,setN] = useState();

    function crearSerie(){
        let newV = [];
        let cn = n;
        let a = 0;
        for(let i=1; i<=cn; i++){
            a = a+2;
            newV.push(a);
        }
        setV(newV)
    }

    return(
        <>
            <h1>Serie con Formulario</h1>
            <label htmlFor="">n</label>
            <input type="number" onChange={(e=>{setN(e.target.value)})}/>
            <button onClick={crearSerie}>iniciar</button><br />
            <h1>{v.join(",")}</h1>
            <p>{n}</p>
        </>
    )
}

export default Serie1form;