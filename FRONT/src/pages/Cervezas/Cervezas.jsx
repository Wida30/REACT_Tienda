import React from "react";

import "./Cervezas.scss";
import CervezaTostada from "../../components/CervezasVarias/CervezaTostada";
import CervezaNegra from "../../components/CervezasVarias/CervezaNegra";
import CervezaRubia from "../../components/CervezasVarias/CervezaRubia";
import { useState } from "react";

const Cervezas = () => {
  const [tipoCervezas, setTipoCervezas] = useState();
  const seleccionar = () => {
    if (tipoCervezas === "Rubia") {
      return <CervezaRubia />;
    } else if (tipoCervezas === "Tostada") {
      return <CervezaTostada />;
    } else if (tipoCervezas === "Negra") {
      return <CervezaNegra />;
    // } else {
    //   return "todo tipo";
    }
  };

  return (
    <div className="gallery">
      <div className="botones">
        <button onClick={() => setTipoCervezas("Rubia")}>Rubia</button>
        <button onClick={() => setTipoCervezas("Tostada")}>Tostada</button>
        <button onClick={() => setTipoCervezas("Negra")}>Negra</button>
      </div>

      <div className="selecionados">{seleccionar()}</div>

      <div className="todas">
        <CervezaRubia />
        <CervezaTostada />
        <CervezaNegra />
      </div>
    </div>
  );
};

export default Cervezas;

// const [cervezas, setCervezas] = useState([]);

// useEffect(() => {
//   const getCerveza = async () => {
//     const cervezasApi = await axios.get("http://localhost:5000/cervezas");
//     setCervezas(cervezasApi.data.cervezas);
//   };
//   getCerveza();
// }, []);

// {/* <div className="galeria">
//         {cervezas.length ? (
//           <>
//             {cervezas.map((cerveza) => (

//                 <figure>
//                   <h2 key={cerveza._id}>{cerveza.nombre}</h2>
//                   <img
//                     src={cerveza.foto}
//                     alt={cerveza.nombre}
//                     className="fotoCerveza"
//                   />
//                   <button type="submit">mas detalles</button>
//                 </figure>

//             ))}
//           </>
//         ) : (
//           <p>loading...</p>
//         )}
//       </div> */}
