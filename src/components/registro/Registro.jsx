import React from 'react';
import './Registro.css';
import Formulario from '../formulario/Formulario';
import {faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import SocialButton from '../socialButton/SocialButton';


function Registro() {
  return (
    <section className='section-registro'>
        <h1>Crea una cuenta</h1>
        <div className="registro-socialButtons">
            <SocialButton icono={faFacebook}/>
            <SocialButton icono={faGithub}/>
            <SocialButton icono={faLinkedinIn}/>
        </div>
        <Formulario />

    </section>
  )
}

export default Registro;
