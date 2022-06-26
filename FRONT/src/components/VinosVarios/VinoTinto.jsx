import React, { useEffect, useState } from 'react'
import axios from 'axios'

const VinoTinto = () => {
    const [vinosTintos, setVinosTintos] = useState([]);

    useEffect (()=>{
        const getTintos = async () => {
            const tintosApi = await axios.get("http://localhost:5000/vinos/tipo/tinto");
            setVinosTintos(tintosApi.data.vino);
        };
        getTintos();
    }, []);

  return (
    <>
      {vinosTintos.length ? (
        <>
          {vinosTintos.map((tinto) => (
            <figure key={tinto._id}>
              <h2>{tinto.nombre}</h2>
              <img src={tinto.foto} alt={tinto.nombre}/>
            </figure>
          ))}
        </>
      ) : (
        <p>Loadin...</p>
      )}
    </>
  )
}

export default VinoTinto