import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

const VinoDetail = () => {

    const {id} = useParams();

    const [vino, setVino] = useState({});

    useEffect(()=> {
        const getVino = async() => {
            const res = await axios.get(`http://localhost:5000/vinos/${id}`);
            console.log(res.data)
            setVino(res.data.vino);
    };
    getVino()
    
}, []);
  return (
    <figure>
    {vino ? (
        <>
            <div className='primario'>
            <h2> {vino.nombre} </h2>
            {/* <img src={vino.foto} alt={vino.nombre}/>
            </div>
            <div className='secundario'>
            <p> tipo: {vino.tipo}</p>
            <p> uva: {vino.uva}</p>
            <p> descripcion: {vino.descripcion}</p>
            <p> añada: {vino.añada}</p>
            <p>precio: {vino.precio}</p> */}
            </div>
        </>
    ): (<p>loading</p>)}
</figure>
  )
}

export default VinoDetail