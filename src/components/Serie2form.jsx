import { useState } from "react";

function Serie2form(){
    const[v,setV] = useState([]);
    const[n,setN] = useState();

    function crearSerie(){
        let newV = [];
        let cn = n;
        let a = 0;
        for(let i=1; i<=cn; i++){
            a = i*3;
            newV.push(a);
        }
        setV(newV)
    }

    return(
        <>
            <h1>Serie con Formulario 2</h1>
            <label htmlFor="">n</label>
            <input type="number" onChange={(e=>{setN(e.target.value)})}/>
            <button onClick={crearSerie}>iniciar</button><br />
            <h1>{v.join(",")}</h1>
            <p>{n}</p>
        </>
    )
}

export default Serie2form;