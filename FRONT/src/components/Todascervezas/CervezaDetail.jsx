import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import "./CervezaDetail.scss"

const CervezaDetail = () => {

    const {id} = useParams();

    const [cerveza, setCerveza] = useState({});

    useEffect(()=> {
        const getCerveza = async() => {
            const res = await axios.get(`http://localhost:5000/cervezas/${id}`);
            console.log(res.data)
            setCerveza(res.data.cerveza);
    };
    getCerveza()
    
}, []);
  return (
    

    <figure className='detalle'>
        {cerveza ? (
            <>
                <div className='primario'>
                <h2> {cerveza.nombre} </h2>
                <img src={cerveza.foto} alt={cerveza.nombre}/>
                </div>
                <div className='secundario'>
                <p><strong>tipo:</strong> {cerveza.tipo}</p>
                <p> <strong>color:</strong> {cerveza.color}</p>
                <p> <strong>descripcion:</strong> {cerveza.descripcion}</p>
                <p> <strong>graduacion:</strong>  {cerveza.graduacion} º</p>
                <p><strong>precio:</strong> {cerveza.precio} euros</p>
                </div>
            </>
        ): (<p>loading</p>)}
    </figure>
  )
}

export default CervezaDetail