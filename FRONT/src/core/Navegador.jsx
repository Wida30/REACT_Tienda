import React, { useContext } from "react";
import "./Navegador.scss";
import { Link } from "react-router-dom";
import ButtonLogout from "../components/ButtonLogout";
import { JwtContext } from "../context/jwtContext";

const Navegador = () => {
  const { jwt } = useContext(JwtContext);

  return (
    <nav className="navegador">
      <ul className="navegador__conjunto">
        <li className="navegador__conjunto__fila">
          <Link to="/">
            <img src="./assets/logo.png" alt="logo" className="logo" />
          </Link>
        </li>

        {/* Si hay token me muestra los vinos, cervezas y logout */}

        {jwt && (
          <>
            <li className="navegador__conjunto__fila">
              <Link to="/vinos">vinos</Link>
            </li>
            <li className="navegador__conjunto__fila">
              <Link to="/cervezas"> cervezas</Link>
            </li>
            {/* <li className="navegador__conjunto__fila">
              <Link to="/sorteo"> Sorteo</Link>
            </li> */}
            <li>
              <ButtonLogout />
            </li>
          </>
        )}

        {/* si no hay token me muestras register y login */}

        {jwt === null && (
          <>
            {/* <li className="navegador__conjunto__fila">
          <Link to="/register">registrarse</Link>
        </li> */}
            <li className="navegador__conjunto__fila">
              <Link to="/login">
                <img src="./assets/login.png" alt="login" />
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navegador;
