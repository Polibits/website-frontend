import React from 'react';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

import ACM_ICPC_Logo from '../assets/logo/white_backgroung_acm_icpc.png';
import OBI_Logo from '../assets/logo/white_backgroung_obi_2023_logo.png';
import HackerCupLogo from '../assets/logo/hackercup.jpg';
import CodeJamLogo from '../assets/logo/codejam.png';

class Competitions extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar></Navbar>
                    <div className='page-content'>
                        <Posts></Posts>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

class Posts extends React.Component {
    render() {
        return (
            <div className='posts'>
                <ACM_ICPC></ACM_ICPC>
                <OBI></OBI>
                <HackerCup></HackerCup>
                <CodeJam></CodeJam>
            </div>
        )
    }
}

class ACM_ICPC extends React.Component {
    render() {
        return (
            <div className='acm_icpc'>
                <h2>ACM-ICPC: International Collegiate Programming Contest</h2>
                <hr></hr>
                <p>
                    A Competição Internacional de Programação Colegial da ACM, ou ACM-ICPC
                    (International Collegiate Programming Contest), é uma das mais prestigiosas 
                    competições de programação do mundo. Criada em 1970, a ACM-ICPC é uma competição 
                    anual que reúne equipes de estudantes universitários de todo o mundo para 
                    resolver problemas de programação complexos em um ambiente de competição.
                </p>
                <div className='main-picture'>
                    <figure>
                        <img alt='' src={ACM_ICPC_Logo}></img>
                        <figcaption>logotipo da ACM-ICPC</figcaption>
                    </figure>
                </div>
                <p>
                    A competição é projetada para testar as habilidades de resolução de problemas, 
                    algoritmos e programação dos participantes. As equipes, compostas por três estudantes, 
                    trabalham em conjunto para resolver um conjunto de problemas em um prazo de cinco horas. 
                    Os problemas variam em dificuldade e abrangem diversas áreas da ciência da computação, 
                    incluindo algoritmos, matemática, estruturas de dados, teoria dos grafos e engenharia de 
                    software. As equipes competem em níveis regionais, nacionais e internacionais, com as 
                    equipes mais bem-sucedidas avançando para as rodadas posteriores. A final mundial da 
                    ACM-ICPC reúne as equipes vencedoras de todo o mundo para competir em um evento de destaque, 
                    geralmente hospedado em uma universidade diferente a cada ano.
                    Além de testar as habilidades de programação, a ACM-ICPC também promove a colaboração, 
                    o pensamento criativo e a resolução de problemas em equipe. A competição é uma 
                    oportunidade para os estudantes demonstrarem suas habilidades, conhecerem colegas 
                    de todo o mundo e, muitas vezes, chamar a atenção de potenciais empregadores em 
                    empresas de tecnologia. A ACM-ICPC desempenha um papel significativo na promoção 
                    da excelência em ciência da computação e na formação de futuros líderes na área. 
                    Ela é altamente respeitada e reconhecida como uma das principais competições 
                    acadêmicas na área de tecnologia da informação.
                </p>
            </div>
        )
    }
}

class OBI extends React.Component {
    render() {
        return (
            <div className='obi'>
                <h2>Olimpíada Brasileira de Informática</h2>
                <hr></hr>
                <p>
                    A Olimpíada Brasileira de Informática (OBI) é uma competição anual que visa estimular o 
                    interesse pela ciência da computação e pela programação entre estudantes do ensino fundamental 
                    e médio no Brasil. A OBI é composta por várias fases, abrangendo desde a fase inicial até a fase 
                    final, onde os competidores enfrentam desafios que variam em complexidade. Os problemas da OBI 
                    incluem questões de algoritmos, programação, estruturas de dados e matemática. Essa competição 
                    desempenha um papel importante na identificação e no desenvolvimento de talentos na área de 
                    tecnologia no país, incentivando os jovens a aprimorar suas habilidades de resolução de problemas 
                    e programação.
                </p>
                <div className='main-picture'>
                    <figure>
                        <img alt='' src={OBI_Logo}></img>
                        <figcaption>logotipo da OBI</figcaption>
                    </figure>
                </div>
                <p>
                    A OBI não apenas proporciona um ambiente competitivo, mas também ajuda a promover a formação de 
                    futuros profissionais em tecnologia, fornecendo uma base sólida de conhecimento e incentivo para 
                    os participantes. Os melhores competidores da OBI frequentemente se destacam em competições 
                    internacionais, demonstrando o alto nível de preparação que a OBI oferece. Além disso, a 
                    competição é vista como uma porta de entrada para carreiras de sucesso no campo da ciência da 
                    computação, preparando os estudantes para desafios futuros em um mundo cada vez mais digital.
                </p>
            </div>
        )
    }
}

class HackerCup extends React.Component {
    render() {
        return (
            <div className='hackercup'>
                <h2>HackerCup</h2>
                <hr></hr>
                <p>
                    A Facebook Hacker Cup é uma competição anual de programação organizada pelo Facebook (agora Meta) que atrai 
                    programadores de todo o mundo. Esta competição desafia os participantes a resolver problemas complexos ao 
                    longo de várias rodadas online, com os melhores competidores avançando para a rodada final presencial. 
                    Os problemas da Hacker Cup são conhecidos por sua complexidade e inovação, muitas vezes envolvendo algoritmos 
                    avançados, estruturas de dados eficientes e matemática aplicada.
                </p>
                <div className='main-picture'>
                    <figure>
                        <img alt='' src={HackerCupLogo}></img>
                        <figcaption>logotipo da HackerCup</figcaption>
                    </figure>
                </div>
                <p>
                    Além de proporcionar uma plataforma para testar as habilidades de programação, a Hacker Cup oferece prêmios 
                    atraentes e reconhecimento global. Os competidores têm a oportunidade de demonstrar seu talento, ganhar 
                    prêmios em dinheiro e, frequentemente, são notados por empresas de tecnologia em busca de talentos. A 
                    competição é um trampolim para que programadores talentosos se destaquem e continuem a contribuir para o 
                    avanço da ciência da computação e da indústria de tecnologia.
                </p>
            </div>
        )
    }
}

class CodeJam extends React.Component {
    render() {
        return (
            <div className='codejam'>
                <h2>Google Code Jam</h2>
                <hr></hr>
                <p>
                    O Google Code Jam é uma das competições de programação mais prestigiosas do mundo, organizada anualmente pelo
                    Google. A competição atrai participantes de todos os cantos do globo para resolver problemas desafiadores 
                    em várias rodadas online, culminando em uma rodada final presencial realizada nas instalações do Google. 
                    Os problemas da Code Jam são conhecidos por sua originalidade e dificuldade, frequentemente envolvendo 
                    algoritmos avançados, conceitos de matemática avançada e raciocínio lógico criativo.
                </p>
                <div className='main-picture'>
                    <figure>
                        <img alt='' src={CodeJamLogo}></img>
                        <figcaption>logotipo da Google Code Jam</figcaption>
                    </figure>
                </div>
                <p>
                    A Code Jam oferece não apenas prêmios substanciais, mas também a oportunidade de ganhar reconhecimento global 
                    como um programador habilidoso. Muitos competidores da Code Jam acabam atraindo a atenção de empresas de 
                    tecnologia de alto nível em busca de talentos excepcionais. Além disso, a competição desempenha um papel 
                    fundamental na promoção da excelência na ciência da computação e no estímulo de novas gerações de talentos 
                    para enfrentar desafios tecnológicos complexos e inovadores em todo o mundo.
                </p>
            </div>
        )
    }
}

export default Competitions;