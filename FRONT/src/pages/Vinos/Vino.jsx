import React, { useState } from "react";
import VinoBlanco from "../../components/VinosVarios/VinoBlanco";
import VinoTinto from "../../components/VinosVarios/VinoTinto";
import VintoRosado from "../../components/VinosVarios/VintoRosado";
import "./Vinos.scss";

const Vino = () => {
  const [tipoVinos, setTipoVinos] = useState([]);
  const seleccionar = () => {
    if (tipoVinos === "Tinto") {
      return <VinoTinto />;
    } else if (tipoVinos === "Blanco") {
      return <VinoBlanco />;
    } else if (tipoVinos === "Rosado") {
      return <VintoRosado />;
    } else {
      return (
        <>
          <VinoTinto />
          <VinoBlanco />
          <VintoRosado />
        </>
      );
    }
  };
  return (
    <div className="gallery">
      <div className="botones">
        <button onClick={() => setTipoVinos("Tinto")}>Tinto</button>
        <button onClick={() => setTipoVinos("Blanco")}>Blanco</button>
        <button onClick={() => setTipoVinos("Rosado")}>Rosado</button>
      </div>

      <div className="selecionados">{seleccionar()}</div>

      {/* <div className="todas">
        <VinoTinto />
        <VinoBlanco />
        <VintoRosado />
      </div> */}
    </div>
  );
};

export default Vino;
