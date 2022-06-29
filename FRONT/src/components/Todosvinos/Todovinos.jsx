import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Todovinos.scss";

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

  const filterVinos = vinos.filter((vino) => vino.tipo.includes(clasificacion));

  return (
    <>
      <div className="botones">
        <button
          onClick={() => setClasificacion("tinto")}
          className="selecionador"
        >
          tinto
        </button>
        <button
          onClick={() => setClasificacion("blanco")}
          className="selecionador"
        >
          blanco
        </button>
        <button
          onClick={() => setClasificacion("rosado")}
          className="selecionador"
        >
          rosado
        </button>
        <button onClick={() => setClasificacion("")} className="selecionador">
          Todos
        </button>
        <button>
          {" "}
          <Link to="/vinoform"> inserta vino </Link>{" "}
        </button>
      </div>

      <div className="mostrando">
        {filterVinos.length ? (
          <>
            {filterVinos.map((vino) => (
              <Link key={vino._id} to={`${vino._id}`}>
                <figure className="container">
                  <h2>{vino.nombre}</h2>
                  <img src={vino.foto} alt={vino.nombre} className="image" />

                  <div className="overlay">
                  {/* <p className="text">
                     
                      <strong>tipo:</strong> {vino.tipo}
                    </p>
                    <p className="text">
                  
                      <strong>uva:</strong> {vino.uva}
                    </p> */}
                    <p className="text">
                    
                      <strong>descripcion:</strong> {vino.descripcion}
                    </p>
                    {/* <p className="text">
                      
                      <strong>añada:</strong> {vino.añada}
                    </p>
                    <p className="text">
                    
                      <strong>precio:</strong> {vino.precio} euros
                    </p> */}
                  </div>
                </figure>
              </Link>
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
