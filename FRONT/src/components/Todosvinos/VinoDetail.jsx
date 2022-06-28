import React, { useEffect, useState } from "react";
import {Link, useParams } from "react-router-dom";
import axios from "axios";
import Borravino from "./Borravino";

const VinoDetail = () => {
  const { id } = useParams();

  const [vino, setVino] = useState({});

  useEffect(() => {
    const getVino = async () => {
      const res = await axios.get(`http://localhost:5000/vinos/${id}`);
      console.log(res.data);
      setVino(res.data.vino);
    };
    getVino();
  }, []);
  return (
    <figure className="detalle">
      {vino ? (
        <>
          <div className="primario">
            <h2> {vino.nombre} </h2>
            <img src={vino.foto} alt={vino.nombre}/>
            </div>
            <div className='secundario'>
            <p> <strong>tipo:</strong>  {vino.tipo}</p>
            <p> <strong>uva:</strong> {vino.uva}</p>
            <p> <strong>descripcion:</strong>  {vino.descripcion}</p>
            <p> <strong>añada:</strong> {vino.añada}</p>
            <p> <strong>precio:</strong> {vino.precio} euros</p>
            {/* le pasamos al componente Borrarvino el _id */}
            <Borravino vinoID={vino._id}/>
            <button> <Link to="/vinos" > back </Link> </button>
          </div>
        </>
      ) : (
        <p>loading</p>
      )}
    </figure>
  );
};

export default VinoDetail;
