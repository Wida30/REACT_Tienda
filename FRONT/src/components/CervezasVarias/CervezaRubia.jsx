import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const CervezaRubia = () => {
  const [cerverubias, setCerverubias] = useState([]);

  useEffect(() => {
    const getRubia = async () => {
      const rubiaApi = await axios.get(
        "http://localhost:5000/cervezas/tipo/rubia"
      );
      setCerverubias(rubiaApi.data.cerveza);
    };
    getRubia();
  }, []);

  return (
    <>
      {cerverubias.length ? (
        <>
          {cerverubias.map((rubia) => (
            <figure key={rubia._id}>
              <h2>{rubia.nombre}</h2>
              <img src={rubia.foto} alt={rubia.nombre}/>
            </figure>
          ))}
        </>
      ) : (
        <p>Loadin...</p>
      )}
    </>
  );
};

export default CervezaRubia;
