import './TopBar.css'
import React from 'react'
import { useEffect } from 'react'
import ImgTopBar from '../Img/imgTopBar.jpg'
import { FiMenu, FiX } from 'react-icons/fi'

function TopBar(){

    useEffect(() => {
        let imgTopBar = document.getElementById('imgTopBar');
        let nomeTopBar = document.getElementById('nomeTopBar');
    
        imgTopBar.addEventListener('mouseover', function mostrarNome(){
          nomeTopBar.innerHTML = 'Jakson Franceschini.';
          nomeTopBar.style.animation = 'mostraNome 1s'
        });
    });

    useEffect(() => {
        let iconeHamburguer = document.getElementById('iconeHamburguer')
        let iconeX = document.getElementById('iconeX')
        let menuHamburguer = document.getElementById('menuHamburguer')
        let containerImgNome = document.getElementById('containerImgNome')
        let menuHamburguerLinks = document.getElementById('menuHamburguerLinks')
    
        iconeHamburguer.addEventListener('click', function mostrarMenu(){
        containerImgNome.style.display = 'none'
        menuHamburguer.style.display = 'flex'
        iconeHamburguer.style.display = 'none'
        menuHamburguer.appendChild(menuHamburguerLinks)
        menuHamburguerLinks.style.display = 'flex'
        iconeX.style.display = 'flex'
        });
    });

    useEffect(() => {
        let iconeX = document.getElementById('iconeX')
        let menuHamburguer = document.getElementById('menuHamburguer')
        let containerImgNome = document.getElementById('containerImgNome')
        let iconeHamburguer = document.getElementById('iconeHamburguer')
        
        iconeX.addEventListener('click', function ocultarMenu(){
            menuHamburguer.style.display = 'none'
            containerImgNome.style.display = 'flex'
            iconeHamburguer.style.display = 'flex'
        });
    });

    return (
        <div className="topBar">

            <div id="containerImgNome">
                <a href="/"><img id="imgTopBar" src={ImgTopBar}></img></a>
                <h2 id="nomeTopBar"></h2>
            </div>

            <ul className="menuTopBar">
                <li><a href="/">Home</a></li>
                <li><a href="Sobre">Sobre</a></li>
                <li><a href="Projetos">Projetos</a></li>
                <li><a href="#containerSkills">Skills</a></li>
            </ul>

            <FiMenu id="iconeHamburguer" size={60} color="#f5f5f5"/>

            <div id="menuHamburguer"></div>

            <ul id="menuHamburguerLinks">
                <li><a href="/">Home</a></li>
                <li><a href="Sobre">Sobre</a></li>
                <li><a href="Projetos">Projetos</a></li>
                <li><a href="#containerSkills">Skills</a></li>
                <li><FiX id="iconeX" color="#f5f5f5"/></li>
            </ul>
        
        </div>
    )
}

export default TopBar