import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import  "./CervezaNegra.scss";

const CervezaNegra = () => {
  const [cerveNegras, setCerveNegras] = useState([]);

  useEffect(() => {
    const getNegras = async () => {
      const negrasApi = await axios.get(
        "http://localhost:5000/cervezas/tipo/negra"
      );
      setCerveNegras(negrasApi.data.cerveza);
    };
    getNegras();
  }, []);

  return (
    <>
      {cerveNegras.length ? (
        <>
          {cerveNegras.map((negra) => (
            <figure key={negra._id}>
              <h2>{negra.nombre}</h2>
              <img src={negra.foto} alt={negra.nombre}/>
            </figure>
          ))}
        </>
      ) : (
        <p>Loadin...</p>
      )}
    </>
  );
};

export default CervezaNegra;