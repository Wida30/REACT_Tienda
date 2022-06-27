import React from "react";
import { useForm } from "react-hook-form";
import { API } from "../../services/api";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const Register = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (formData) => {
    console.log(formData);

    if (formData.edad > 17) {

      //en api se puede .create .post.get...

      API.post("users/register", formData).then((response) => {
        navigate("/login");
      });
    } else {
      // alert("No puedes registarte por ser menor de edad");
      Swal.fire({
        title: 'Lo sentimos!',
        text: 'eres menos de edad',
        icon: 'warning',
        confirmButtonText: 'OK'
      })
    }

    
  };
  return (
    <div className="formulario">
   
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          {...register("nombre", { required: true })}
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          {...register("email", { required: true })}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          {...register("password", { required: true })}
        />

        <label htmlFor="edad">edad</label>
        <input
          type="number"
          id="edad"
          {...register("edad", { required: true })}
        />

        <button type="submit">Registrate</button>
      </form>
    </div>
  );
};

export default Register;
