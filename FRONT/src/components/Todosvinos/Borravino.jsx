import React from "react";
import Swal from "sweetalert2";
import { API } from "../../services/api";
import { useNavigate } from "react-router-dom";

const Borravino = ({ vinoID }) => {
  // 1- hemos recogido el -id en vinoID, desde vinoDetail

  const navigate = useNavigate();

  // 3-al crear la funcion de borrar el pasamos el _id/(vinoID) como id y lo concatenamos al final de la URL

  const deleteVino = (id) => {
    API.delete("vinos/" + id).then((Response) => {
      navigate("/vinos");

      Swal.fire({
        title: "Vino borrado",
        icon: "success",
        confirmButtonText: "OK",
      });
    });
  };

  // 2-  al llamar a la function de borrar le estamos pasando el _id como ha sido recogido al principio (vinoID)

  return (
    <button onClick={() => deleteVino(vinoID)} className="selecionador">
      borrar
    </button>
  );
};

export default Borravino;
