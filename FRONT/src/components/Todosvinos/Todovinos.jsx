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
        <button onClick={() => setClasificacion("tinto")}>tinto</button>
        <button onClick={() => setClasificacion("blanco")}>blanco</button>
        <button onClick={() => setClasificacion("rosado")}>rosado</button>
        <button onClick={() => setClasificacion("")}>Todos</button>
      </div>

      

      {filterVinos.length ? (
        <>
          {filterVinos.map((vino) => (
            <figure key={vino._id}>
              <h2>{vino.nombre}</h2>
              <img src={vino.foto} alt={vino.nombre} />
            </figure>
          ))}
        </>
      ) : (
        <p>Loadin...</p>
      )}
    </>
  );
};

export default Todovinos;
