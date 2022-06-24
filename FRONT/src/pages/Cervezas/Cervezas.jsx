
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./Cervezas.scss"

const Cervezas = () => {

  const [cervezas, setCervezas] = useState([]);

  useEffect(() => {
    const getCerveza = async () => {
      const cervezasApi = await axios.get("http://localhost:5000/cervezas");
      setCervezas(cervezasApi.data.cervezas);
    };
    getCerveza();
  }, []);
  return (
    <div className="galeria">
      {cervezas.length ? (
        <>
          {cervezas.map((cerveza) => (
            <figure>
            <h2 key={cerveza._id}>{cerveza.nombre}</h2>
            <img src={cerveza.foto} alt={cerveza.nombre} className="fotoCerveza"/>
            <button type="submit">mas detalles</button>
            </figure>
          ))}
        </>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default Cervezas

