import './PaginaProjetos.css'
import TopBar from '../../Components/TopBar'
import Footer from '../../Components/Footer'
import ImgProfileCard from './../../Img/imgProfileCard.png'
import ImgToDo from './../../Img/imgToDo.png'
import ImgFormLogin from './../../Img/imgFormLogin.png'
import ImgNavBar from './../../Img/imgNavBar.png'
import { BsGithub, BsGlobe, BsFillArrowRightCircleFill } from 'react-icons/bs'

function PaginaProjetos() {

    return (
        <div className='paginaProjetos'>

            <TopBar/>

            <div className='containerProjetos'>
                <div className='cardProjeto'>
                    <h2>Profile Card</h2>
                    <img src={ImgProfileCard}></img>
                    <p>
                        Projeto pessoal de um Profile Card desenvolvido com HTML e CSS.
                    </p>
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

                <div className='cardProjeto'>
                    <h2>ToDo List</h2>
                    <img src={ImgToDo}></img>
                    <p>
                        Projeto pessoal de um ToDo List desenvolvido com HTML, CSS e JavaScript.
                    </p>
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

                <div className='cardProjeto'>
                    <h2>Form Login</h2>
                    <img src={ImgFormLogin}></img>
                    <p>
                        Projeto pessoal de um Form Login desenvolvido com HTML e CSS.
                    </p>
                    <ul>
                        <li>
                            <a href='https://github.com/JakFranceschini/FormLogin' target='blank'>
                                <BsGithub size={35} color="#f5f5f5"/>
                                <BsFillArrowRightCircleFill className='seta' size={25} color="#f5f5f5"/>
                            </a>
                        </li>
                        <li><a href='https://form-login-sooty.vercel.app/' target='blank'>
                                <BsGlobe size={35} color="#f5f5f5"/>
                                <BsFillArrowRightCircleFill className='seta' size={25} color="#f5f5f5"/>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className='cardProjeto'>
                    <h2>Nav Bar</h2>
                    <img src={ImgNavBar}></img>
                    <p>
                        Projeto pessoal de uma Nav Bar desenvolvido com HTML, CSS e JavaScript.
                    </p>
                    <ul>
                        <li>
                            <a href='https://github.com/JakFranceschini/NavBar' target='blank'>
                                <BsGithub size={35} color="#f5f5f5"/>
                                <BsFillArrowRightCircleFill className='seta' size={25} color="#f5f5f5"/>
                            </a>
                        </li>
                        <li><a href='https://nav-bar-ruby-ten.vercel.app/' target='blank'>
                                <BsGlobe size={35} color="#f5f5f5"/>
                                <BsFillArrowRightCircleFill className='seta' size={25} color="#f5f5f5"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <Footer/>

        </div>
    )
}
  
export default PaginaProjetos;