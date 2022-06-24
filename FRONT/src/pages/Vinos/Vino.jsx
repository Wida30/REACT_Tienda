import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Vino = () => {
  const [vinos, setVinos] = useState([]);

  useEffect(() => {
    const getVinos = async () => {
      const vinosApi = await axios.get("http://localhost:5000/vinos");
      setVinos(vinosApi.data.vinos);
    };
    getVinos();
  }, []);
  return (
    <div>
      {vinos.length ? (
        <>
          {vinos.map((vino) => (
            <h2 key={vino._id}>{vino.nombre}</h2>
          ))}
        </>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default Vino;
