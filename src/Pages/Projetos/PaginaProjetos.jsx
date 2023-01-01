import './PaginaProjetos.css'
import TopBar from '../../Components/TopBar'
import Footer from '../../Components/Footer'
import ImgPrimeiroCard from './../../Img/imgPrimeiroCard.png'
import ImgSegundoCard from './../../Img/imgSegundoCard.png'
import { BsGithub, BsGlobe, BsFillArrowRightCircleFill } from 'react-icons/bs'

function PaginaProjetos() {

    return (
        <div className='paginaProjetos'>

            <TopBar/>

            <div className='containerProjetos'>
                <div className='cardProjeto'>
                    <h2>Profile Card</h2>
                    <img src={ImgPrimeiroCard}></img>
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
                    <img src={ImgSegundoCard}></img>
                    <p>
                        Projeto pessoal de um ToDo List desenvolvido com HTML e CSS e JavaScript.
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
            </div>

            <Footer/>

        </div>
    )
}
  
export default PaginaProjetos;