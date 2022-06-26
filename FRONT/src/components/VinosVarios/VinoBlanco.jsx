import axios from "axios";
import React, { useEffect, useState } from "react";

const VinoBlanco = () => {
  const [vinosBlancos, setVinosBlancos] = useState([]);

  useEffect(() => {
    const getBlancos = async () => {
      const blancosApi = await axios.get(
        "http://localhost:5000/vinos/tipo/blanco"
      );
      setVinosBlancos(blancosApi.data.vino);
    };
    getBlancos();
  }, []);

  return (
    <>
      {vinosBlancos.length ? (
        <>
          {vinosBlancos.map((blanco) => (
            <figure key={blanco._id}>
              <h2>{blanco.nombre}</h2>
              <img src={blanco.foto} alt={blanco.nombre} />
            </figure>
          ))}
        </>
      ) : (
        <p>Loadin...</p>
      )}
    </>
  );
};

export default VinoBlanco;
