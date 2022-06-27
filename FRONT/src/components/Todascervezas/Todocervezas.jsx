import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Todocerveza.scss";

const Todocervezas = () => {
  const [cervezas, setCervezas] = useState([]);

  useEffect(() => {
    const getCervezas = async () => {
      const cervezasApi = await axios.get("http://localhost:5000/cervezas");
      setCervezas(cervezasApi.data.cervezas);
    };
    getCervezas();
  }, []);

  const [clasificacion, setClasificacion] = useState("");

  const filterCervezas = cervezas.filter((cerveza) =>
    cerveza.tipo.includes(clasificacion)
  );

  return (
    <>
      <div className="botones">
        <button onClick={() => setClasificacion("rubia")} className = "selecionador">rubia</button>
        <button onClick={() => setClasificacion("tostada")}className = "selecionador">tostada</button>
        <button onClick={() => setClasificacion("negra")}className = "selecionador">negra</button>
        <button onClick={() => setClasificacion("")}className = "selecionador">Todos</button>
      </div>

      <div className="mostrando">

      {filterCervezas.length ? (
        <>
          {filterCervezas.map((cerveza) => (
            <figure key={cerveza._id}>
              <h2>{cerveza.nombre}</h2>
              <img src={cerveza.foto} alt={cerveza.nombre} />
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

export default Todocervezas;
