import React from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import { API } from '../../services/api';

const Borrarcerveza = ({cervezaID}) => {

    const navigate = useNavigate();

    const deleteCerveza = (id) => {
        API.delete("cervezas/" +id).then((Response) => {
            navigate("/cervezas");

            Swal.fire({
                title: "Cerveza borrada",
        icon: "success",
        confirmButtonText: "OK",
            })
        })
    }

    return <button onClick={() => deleteCerveza(cervezaID)} className = "selecionador">borrar</button>
}

export default Borrarcerveza