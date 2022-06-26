import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const CervezaTostada = () => {
  const [cerveTostadas, setCerveTostadas] = useState([]);

  useEffect(() => {
    const getTostada = async () => {
      const tostsdaApi = await axios.get(
        "http://localhost:5000/cervezas/tipo/tostada"
      );
      setCerveTostadas(tostsdaApi.data.cerveza);
    };
    getTostada();
  }, []);

  return (
    <>
      {cerveTostadas.length ? (
        <>
          {cerveTostadas.map((tostada) => (
            <figure key={tostada._id}>
              <h2>{tostada.nombre}</h2>
              <img src={tostada.foto} alt={tostada.nombre}/>
            </figure>
          ))}
        </>
      ) : (
        <p>Loadin...</p>
      )}
    </>
  );
};

export default CervezaTostada;