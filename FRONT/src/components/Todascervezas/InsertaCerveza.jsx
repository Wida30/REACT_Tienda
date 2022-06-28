import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { API } from '../../services/api';
import Swal from 'sweetalert2';

const InsertaCerveza = () => {

    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    const onSubmit = (FormData) => {
         
        API.post("cervezas", FormData).then((Response) => {
            navigate("/cervezas");


            Swal.fire({
                title: 'Cerveza Creada',
                icon: 'success',
                confirmButtonText: 'OK'
              })
        })
    }

  return (
    <div  className="formulario">

    <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='id'>Orden</label>
        <input type="number" id="id" {...register("id", { required: true })} />

        <label htmlFor='tipo'>Tipo de Cerveza</label>
        <input type="text" id="tipo" {...register("tipo", { required: true })} />

        <label htmlFor='nombre'>Nombre</label>
        <input type="text" id="nombre" {...register("nombre", { required: true })} />

        <label htmlFor='color'>Color</label>
        <input type="text" id="color" {...register("color", { required: true })} />

        <label htmlFor='descripcion'>descripcion</label>
        <input type="text" id="descripcion" {...register("descripcion", { required: true })} />

        <label htmlFor='precio'>precio</label>
        <input type="number" id="precio" {...register("precio", { required: true })} />

       
        <label htmlFor='graduacion'>graduacion</label>
        <input type="number" id="graduacion" {...register("graduacion", { required: true })} />

        <label htmlFor='foto'>imagen</label>
        <input type="text" id="foto" {...register("foto", { required: true })} />

        <button type="submit">Inserta tu Cerveza</button>

    </form>


    </div>
  )
}

export default InsertaCerveza