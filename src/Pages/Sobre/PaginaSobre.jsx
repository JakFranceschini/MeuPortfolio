import React from 'react'
import './PaginaSobre.css'
import Footer from '../../Components/Footer'
import TopBar from '../../Components/TopBar'

function PaginaSobre () {
    return (
        <div className='paginaSobre'>
            <TopBar/>
            <div className='containerSobre'>
                <h1>Um pouco sobre mim</h1>
                <h2>
                    Me chamo Jakson Franceschini, estou iniciando na area da programação, moro em Porto Alegre, RS. Optei em começar pelo desenvolvimento frontend
                    pois foi onde eu me senti mais motivado e tive mais facilidades para aprender. Apesar de saber os fundamentos do frontend eu também sei
                    algumas coisas de backend utilizando o Python e também sei utilizar o framework PyQt para desenvolver softwares de computador
                </h2>
                <p>
                    Na parte do frontend eu sei utilizar o HTML, CSS, JavaScript e ReactJs. Em HTML ja estou bem avançado conhecendo muitas tags e utilizando
                    HTML de forma semântica. Com o CSS ja possuo conhecimento em uma vasta lista de propriedades sem precisar de consulta, utilizo propriedades
                    para design responsivo e animações. No JavaScrip sei toda a base da linguagem por ter o Python como minha primeira linguagem eu aprendi o
                    JavaScript com mais facilidade. O React JS comecei a pouco tempo mas ja peguei o conceito de como funciona muito rapidamente.
                </p>
                <p>
                    O pouco que sei de backend eu aprendi utilizando o Python, o Python foi minha primeira linguagem de programação, aprendi toda a base da
                    linguagem, as variáveis, funções, loops, listas, tuplas, objetos e etc. Aprendi a utilizar também o framework PyQt para desenvolver programas
                    de computador com ele e o Python eu pude aprender a trabalhar com programação orientada a objetos.
                </p>
            </div>
            <Footer/>
        </div>
    )
}
export default PaginaSobre