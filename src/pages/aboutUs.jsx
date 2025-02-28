import React from 'react';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

import Post from '../components/post';

class AboutUs extends React.Component{
    render(){
        return (
            <div>
                <div>
                    <Navbar></Navbar>
                    <div className='page-content'>
                        <WhoAreWe></WhoAreWe>
                        <Team></Team>
                        <History></History>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

class WhoAreWe extends React.Component{
    render(){
        return(
            <section className='who-are-we'>
                <div className='posts'>
                    <h1>Quem Somos Nós?</h1>
                    <hr></hr>
                    <p>
                        A Polibits é um grupo de extensão da Escola Politécnica da USP, voltado a competições 
                        de programação. Ele busca promover a cultura olímpica na área de computação, num espaço 
                        aberto, desafiador e divertido para todos! Dessa forma, treinamos alunos de graduação 
                        para os desafios mais diversos e reunimos talentos em uma oportunidade incrível de aprendizado.
                    </p>
                    <br></br>
                </div>
            </section>
        )
    }
}

class Team extends React.Component{
    render(){
        return(
            <section className='team'>
                <div className='posts'>
                    <h1>Nossa Equipe</h1>
                    <hr></hr>
                    <TeamMember 
                        name='Ana Vitória Abreu Murad' 
                        role='Coordenador'
                        email='anavitoriamurad@usp.br'></TeamMember>
                        <br></br>
                </div>
            </section>
        )
    }
}

class TeamMember extends React.Component {
    render() {
        return (
            <div>
                <div className='member-img-container'></div>
                <div className='member-info'>
                    <li>{this.props.role}: {this.props.name}</li>
                    <li>e-mail: {this.props.email}</li>
                </div>
            </div>
        )
    }
}

class History extends React.Component{
    render(){
        return(
            <section className='history'>
                <div className='posts'>
                    <h1>Nossa História</h1>
                    <hr></hr>
                    <p>
                        O grupo nasceu em 2022, fundado por Henrique S. Souza, estudante de engenharia de computação, a partir do desejo de resgatar a cultura de olimpíadas do ensino médio, com competições como a  Olimpíada Brasileira de Informática (OBI).
                    </p>
                    <p>
                        Naquele mesmo ano, juntamos estudantes interessados e competimos na maratona de programação SBC, parte da ACM-ICPC (International Collegiate Programming Contest), e na OBI, com resultados excelentes: todos os três times cadastrados obtiveram menções honrosas e altas classificações no ranking da ACM-ICPC e boa parte dos inscritos da OBI passaram para as fases seguintes. A participação contou com apoio do Departamento de Engenharia de Computação e Sistemas Digitais, da Escola Politécnica, que, desde então, apoia nosso grupo.
                    </p>
                    {/*foto de 2022*/}
                    <p>
                        Em 2023, contamos com apoio do MaratonUSP, grupo similar do Instituto de Matemática e Estatística, para 
                        oferecimento de um Bootcamp especial de programação competitiva, denomidado "Bixecamp 2023", para os calouros da Escola Politécnica. Essa experiência rendeu grande engajamento por parte dos alunos, com cerca de 30 participantes das aulas e atividades.
                    </p>
                    {/*foto bixecamp*/}
                    <p>
                        Nesse ano, inscrevemos mais de 19 calouros na OBI e quatro times na ACM-ICPC, todos da Escola Politécnica. Novamente, alcançamos grandes resultados, com todos os times premiados com menção honrosa na ACM-ICPC e ótimo desempenho na OBI.
                    </p>
                    {/*foto de 2023*/}
                </div>
            </section>
        )
    }
}

export default AboutUs;