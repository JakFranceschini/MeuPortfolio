import './Footer.css'
import React from "react";
import { BsFacebook, BsGithub, BsInstagram, BsWhatsapp, BsLinkedin } from "react-icons/bs";

export default props =>

    <div className="containerFooter">

        <h2>jakson.franceschini@gmail.com</h2>

        <ul>
            <li><a href="https://www.facebook.com/jakson.franceschini" target="blank"><BsFacebook size={25} color="#f5f5f5"/></a></li>
            <li><a href="https://www.instagram.com/jaksonfranceschini/?hl=pt-br" target="blank"><BsInstagram size={25} color="#f5f5f5"/></a></li>
            <li><a href="https://api.whatsapp.com/send?phone=5551993443132" target="blank"><BsWhatsapp size={25} color="#f5f5f5"/></a></li>
            <li><a href="https://github.com/JakFranceschini" target="blank"><BsGithub size={25} color="#f5f5f5"/></a></li>
            <li><a href="https://www.linkedin.com/in/jakson-franceschini-87a15825b/" target="blank"><BsLinkedin size={25} color="#f5f5f5"/></a></li>
        </ul>

        <h3>Copyright © 2022 | Jakson Franceschini. Todos os direitos reservados.</h3>
        
    </div>