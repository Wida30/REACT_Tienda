import axios from 'axios';
import React, { useEffect, useState } from 'react'

const VintoRosado = () => {
    const [vinosRosados, setVinosRosados] = useState([]);

    useEffect (()=> {
        const getVinosRosados = async () => {
            const rosadosApi = await axios.get("http://localhost:5000/vinos/tipo/rosado");
            setVinosRosados(rosadosApi.data.vino);
        };
        getVinosRosados();
    }, []);

  return (
    <>
    {vinosRosados.length ? (
      <>
        {vinosRosados.map((rosado) => (
          <figure key={rosado._id}>
            <h2>{rosado.nombre}</h2>
            <img src={rosado.foto} alt={rosado.nombre}/>
          </figure>
        ))}
      </>
    ) : (
      <p>Loadin...</p>
    )}
  </>
  )
}

export default VintoRosado