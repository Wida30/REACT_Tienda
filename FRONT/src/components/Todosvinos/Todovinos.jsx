import React, { useEffect, useState } from "react";
import axios from "axios";



const Todovinos = () => {
  const [vinos, setVinos] = useState([]);

  useEffect(() => {
    const getVinos = async () => {
      const vinosApi = await axios.get("http://localhost:5000/vinos");
      setVinos(vinosApi.data.vinos);
    };
    getVinos();
  }, []);

  const [clasificacion, setClasificacion] = useState("");

  const filterVinos = vinos.filter((vino) =>
    vino.tipo.includes(clasificacion)
  );

  return (
    <>
      <div className="botones">
        <button onClick={() => setClasificacion("tinto")}className = "selecionador">tinto</button>
        <button onClick={() => setClasificacion("blanco")}className = "selecionador">blanco</button>
        <button onClick={() => setClasificacion("rosado")}className = "selecionador">rosado</button>
        <button onClick={() => setClasificacion("")} className = "selecionador">Todos</button>
      </div>

      <div className="mostrando">

      {filterVinos.length ? (
        <>
          {filterVinos.map((vino) => (
            <figure key={vino._id} className="carta">
              <h2>{vino.nombre}</h2>
              <img src={vino.foto} alt={vino.nombre} />
            </figure>
          ))}
        </>
      ) : (
        <p>Loadin...</p>
      )}
      </div>
    </>
  );
};

export default Todovinos;
