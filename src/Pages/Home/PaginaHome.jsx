import './PaginaHome.css'
import { useEffect } from 'react'
import ImgCss from './../../Img/imgCss3.png'
import ImgPyqt from './../../Img/imgPyqt.png'
import Footer from './../../Components/Footer'
import TopBar from './../../Components/TopBar'
import ImgHtml from './../../Img/imgHtml5.png'
import ImgPython from './../../Img/imgPython.png'
import ImgReactjs from './../../Img/imgReactjs.png'
import ImgJavaScript from './../../Img/imgJavascript.png'
import ImgToDo from './../../Img/imgToDo.png'
import ImgProfileCard from './../../Img/imgProfileCard.png'
import { BsFacebook, BsGithub, BsInstagram, BsWhatsapp, BsGlobe, BsFillArrowRightCircleFill } from 'react-icons/bs'

function PaginaHome() {

  useEffect(() => {
    let email = document.getElementById('email')

    email.addEventListener('mouseover', function mostrarNome(){
      email.style.cursor = 'text';
      email.style.color = '#f5f5f5';
      email.style.maxWidth = '380px';
      email.style.fontWeight = '600';
      email.style.fontSize = '1.2rem';
      email.style.borderRadius = '30px';
      email.style.letterSpacing = '3px';
      email.style.padding = '13px 25px';
      email.style.background = '#303030';
      email.innerHTML = 'jakson.franceschini@gmail.com';
    });
  });

  return (
    <div className="paginaHome">

      <TopBar/>

      <div className="header">
        <h1>Desenvolvedor FrontEnd, criando interfaces inteligentes e intuitivas.</h1>
        <p>Olá, eu me chamo Jakson Franceschini - Sou um desenvolvedor FrontEnd, moro em Porto Alegre, RS. Estou começando na area da programação, já possuo
            uma boa base de HTML, CSS, JavaScript e ReactJS - Tambem sei um pouco de Python e o framework PYQT para desenvolvimento de softwares - Sou muito
            dedicado e comprometido em tudo que faço, atualmete estou a procura de uma primeira oportunidade para poder seguir carreira na area.
        </p>
      </div>

      <div className="containerContato">
        <h2>Contato.</h2>

        <div className='containerRedesSociais'>
            <ul>
                <li><a href="https://www.facebook.com/jakson.franceschini" target="blank"><BsFacebook size={40} color="#f5f5f5"/></a></li>
                <li><a href="https://www.instagram.com/jaksonfranceschini/?hl=pt-br" target="blank"><BsInstagram size={40} color="#f5f5f5"/></a></li>
                <li><a href="https://api.whatsapp.com/send?phone=5551993443132" target="blank"><BsWhatsapp size={40} color="#f5f5f5"/></a></li>
                <li><a href="https://github.com/JakFranceschini" target="blank"><BsGithub size={40} color="#f5f5f5"/></a></li>
            </ul>
            <li id="email"><h3>Email</h3></li>
        </div>

      </div>

      <div className="containerDestaques">

          <h2>Projetos em destaques.</h2>
          <h3>Alguns projetos pessoais que estou desenvolvendo.</h3>

          <div className="cardDestaque" href="">
              <img src={ImgProfileCard}></img>
              <div className="conteudoCardDestaque">
                  <h2>Profile Card</h2>
                  <p>Projeto pessoal de um Profile Card desenvolvido com HTML e CSS.</p>
                  <ul>
                        <li>
                            <a href='https://github.com/JakFranceschini/ProfileCard' target='blank'>
                                <BsGithub size={35} color="#f5f5f5"/>
                                <BsFillArrowRightCircleFill className='seta' size={25} color="#f5f5f5"/>
                            </a>
                        </li>
                        <li><a href='https://profile-card-rho-tan.vercel.app/' target='blank'>
                                <BsGlobe size={35} color="#f5f5f5"/>
                                <BsFillArrowRightCircleFill className='seta' size={25} color="#f5f5f5"/>
                            </a>
                        </li>
                    </ul>
              </div>
          </div>

          <div className="cardDestaque" href="">
          <img src={ImgToDo}></img>
              <div className="conteudoCardDestaque">
                  <h2>ToDo List</h2>
                  <p>Desenvolvi um projeto de ToDo List com HTML, CSS e JavaScript.</p>
                  <ul>
                        <li>
                            <a href='https://github.com/JakFranceschini/ToDoList' target='blank'>
                                <BsGithub size={35} color="#f5f5f5"/>
                                <BsFillArrowRightCircleFill className='seta' size={25} color="#f5f5f5"/>
                            </a>
                        </li>
                        <li><a href='https://to-do-list-tau-jade.vercel.app/' target='blank'>
                                <BsGlobe size={35} color="#f5f5f5"/>
                                <BsFillArrowRightCircleFill className='seta' size={25} color="#f5f5f5"/>
                            </a>
                        </li>
                    </ul>
              </div>
          </div>

          <a className="verMais" href="Projetos">Ver mais<BsFillArrowRightCircleFill className="seta" size={20} color="#f5f5f5"/></a>

      </div>

      <div id="containerSkills">
          <h2>Skills</h2>
          <h3>Ferramentas de desenvolvimento que eu possuo habilidades.</h3>
          <div className="containerConteudoSkills">
              <ul className="imgSkills">
                  <li>
                      <img src={ImgHtml}></img>
                      <h4>HTML</h4>
                  </li>
              </ul>
              <ul className="imgSkills">
                  <li>
                      <img src={ImgCss}></img>
                      <h4>CSS</h4>
                  </li>
              </ul>
              <ul className="imgSkills">
                  <li>
                      <img src={ImgJavaScript}></img>
                      <h4>JavaScript</h4>
                  </li>
              </ul>
              <ul className="imgSkills">
                  <li>
                      <img src={ImgReactjs}></img>
                      <h4>React JS</h4>
                  </li>
              </ul>
              <ul className="imgSkills">
                  <li>
                      <img src={ImgPython}></img>
                      <h4>Python</h4>
                  </li>
              </ul>
              <ul className="imgSkills">
                  <li>
                      <img src={ImgPyqt}></img>
                      <h4>PyQt</h4>
                  </li>
              </ul>
          </div>
      </div>

      <Footer/>
      
    </div>
  )
}

export default PaginaHome;


