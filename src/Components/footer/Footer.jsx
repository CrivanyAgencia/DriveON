//Dependencias
import React from 'react'
import { Link } from 'react-router-dom'
//Componentes y funciones
import { ScrolltoTop } from '../scroll/ScrollToTop'
//Estilos
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
        <div className="grupo-1">
            <div className="box">
                <figure>
                    <h1>DriveON</h1>
                </figure>
            </div>
            <div className="box">
                <h2>SOBRE NOSOTROS</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, natus?</p>
            </div>
            <div className="box">
                <h2>SIGUENOS</h2>
                <div className="red-social">
                    <a href="#" className="fab fa-facebook"></a>
                    <a href="#" className="fab fa-instagram"></a>
                    <a href="#" className="fab fa-twitter"></a>
                    <a href="#" className="fab fa-linkedin"></a>
                </div>
                <div>
                    <p>Contacto:<span>info@autoescueladriveon.com</span></p>
                    <p>Teléfono: <span>+34 623-36-48-42</span></p>
                </div>
            </div>
            <div className="box">
                    <Link to="/cookies"><p>Política de Cookies</p></Link>
                    <Link to="/terms"><p>Terminos y Condiciones</p></Link>
                    <Link to="/warning"><p>Aviso Legal</p></Link>
                </div>
        </div>
        <div className="grupo-2">
            <small>&copy; 2021 <b>DriveON</b> - Todos Los Derechos Reservados.</small>
            <ScrolltoTop />
        </div>
    </footer>
    )
}

export default Footer

