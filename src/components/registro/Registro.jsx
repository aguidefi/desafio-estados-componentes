import React from 'react';
import './Registro.css';
import Formulario from '../formulario/Formulario';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faFacebook, FaLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import SocialButton from '../socialButton/SocialButton';

function Registro() {
  return (
    <section className='section-registro'>
        <h1>Crea una cuenta</h1>
        <div className="registro-socialButtons">
            <SocialButton icono="fa-brands fa-facebook fa-2xl"/>
            <SocialButton icono="fa-brands fa-github fa-2xl"/>
            <SocialButton icono="fa-brands fa-linkedin-in fa-2xl"/>
        </div>
        <Formulario />

    </section>
  )
}

export default Registro;
