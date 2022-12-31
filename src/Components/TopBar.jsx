import './TopBar.css'
import React from "react";
import ImgTopBar from "../Img/imgTopBar.jpg";

export default props =>

    <div className="topBar">

        <div className="containerImgNome">
            <a href="/"><img id="imgTopBar" src={ImgTopBar}></img></a>
            <h2 id="nomeTopBar"></h2>
        </div>

        <ul className="menuTopBar">
            <li><a href="/">Home</a></li>
            <li><a href="Sobre">Sobre</a></li>
            <li><a href="Projetos">Projetos</a></li>
            <li><a className="linkSkills" href="#containerSkills">Skills</a></li>
        </ul>
        
    </div>