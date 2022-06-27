import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { API } from "../../services/api";
import { useNavigate } from "react-router-dom";

import "./Login.scss";
import { JwtContext } from "../../context/jwtContext";
//Importamos la funcion loginUser desde App mediante prop
const Login = () => {
  const { register, handleSubmit } = useForm();

  const { setJwt } = useContext(JwtContext);

  const navigate = useNavigate();

  const onSubmit = (formData) => {
    console.log(formData);
    //hago un post a la ruta users/login y le paso los datos del formulario
    API.post("users/login", formData).then((response) => {
      
      //aqui almacemanos el token
      localStorage.setItem("token", response.data.data.token);
      //aqui almacenamos el nombre
      // localStorage.setItem("nombre", response.data.data.user.nombre);
  

      setJwt(localStorage.getItem("token"));
      navigate("/");
    });
  };

  return (

    


    <div className="formulario">
    
      <form onSubmit={handleSubmit(onSubmit)}>

      <h2>Inicia Sesion</h2>


        {/* <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true })}
        /> */}

        {/* enlazar con el controlador del usuario */}
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          {...register("nombre", { required: true })}
        />

        {/* en el controlador del usuario tenemos el password para comprobar si existe */}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          {...register("password", { required: true })}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
