import React from 'react'
import "./Navegador.scss"
import { Link} from "react-router-dom"


const Navegador = () => {
  return (
    <nav className='navegador'>
        <ul className='navegador__conjunto'>
            <li className='navegador__conjunto__fila'>
            <Link to="/"> <img src='./assets/logo.png' alt='logo' className='logo'/> </Link> </li>
            <li className='navegador__conjunto__fila'>
            <Link to="/vinos">
            vinos</Link> </li>
            <li className='navegador__conjunto__fila'>
            <Link to="/cervezas" > cervezas</Link>
            </li>
            <li className='navegador__conjunto__fila'>
            <Link to="/register">registrarse</Link> </li>
            <li className='navegador__conjunto__fila'>
            <Link to="/login"> <img src='./assets/login.png'  alt='login'/> </Link>
            </li>
            
        </ul>
    </nav>
  )
}

export default Navegador