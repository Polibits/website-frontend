import React from 'react';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Posts from '../components/post';


// Importação das imagens dos eventos
import workshopVisagio from '../assets/historic/workshop_visagio.png';
import palestraGoogle from '../assets/historic/palestra_google.png';
import bootcampCpp from '../assets/historic/bootcamp_cpp.png';
import maratonaSBC from '../assets/historic/maratona_sbc.png';

class Historic extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className='page-content'>
                    <HistoricSection />
                    <Posts />
                </div>
                <Footer />
            </div>
        );
    }
}

class HistoricSection extends React.Component {
    render() {
        return (
            <div className='historic-section'>
                <h2>Histórico: PoliBits em 2024</h2>
                <p>
                    Além do foco em programação competitiva, o PoliBits também participa de eventos voltados para a 
                    indústria de tecnologia e o mercado de trabalho. Nosso objetivo é proporcionar contato com empresas, 
                    além de contribuir para a comunidade acadêmica. A seguir, alguns dos principais eventos do ano.
                </p>

                {/* Workshop Visagio */}
                <div className='event'>
                    <img src={workshopVisagio} alt='Workshop de IA Generativa - Visagio' className='event-image' />
                    <h3>Workshop: IA Generativa Aplicada a Negócios</h3>
                    <p>
                        Em parceria com a Visagio, realizamos um workshop sobre o uso de modelos de linguagem no mercado de consultoria. 
                        O evento abordou:
                    </p>
                    <ul>
                        <li>Técnicas de prompt engineering e sua aplicação prática.</li>
                        <li>Estudos sobre a eficácia de abordagens como Chain-of-Thought.</li>
                        <li>Uso da API do Gemini (Google AI) para resolver problemas reais.</li>
                    </ul>
                    <p>O workshop foi conduzido por Renato Miyaji, doutorando da Poli e consultor na Visagio.</p>
                </div>

                {/* Palestra Google */}
                <div className='event'>
                    <img src={palestraGoogle} alt='Palestra com AI Engineer da Google' className='event-image' />
                    <h3>Palestra com AI Engineer da Google</h3>
                    <p>
                        Recebemos Alexandre Mafra, AI Engineer na Google São Paulo, que compartilhou sua trajetória profissional não convencional:
                    </p>
                    <ul>
                        <li>Fundou uma escola no primeiro ano de faculdade, que segue ativa até hoje.</li>
                        <li>Atuou como pesquisador premiado em inteligência artificial.</li>
                        <li>Construiu uma carreira até chegar ao Google.</li>
                    </ul>
                    <p>A palestra trouxe reflexões valiosas sobre desenvolvimento profissional e acadêmico.</p>
                </div>

                {/* Bootcamp C++ */}
                <div className='event'>
                    <img src={bootcampCpp} alt='Bootcamp de C++ e Algoritmos' className='event-image' />
                    <h3>Bootcamp: Introdução a C++, Algoritmos e Estruturas de Dados</h3>
                    <p>
                        Durante o primeiro semestre de 2024, organizamos um bootcamp intensivo de C++, abordando desde a sintaxe básica até algoritmos e estruturas de dados essenciais.
                    </p>
                    <ul>
                        <li>Média de mais de 20 alunos por aula.</li>
                        <li>Conteúdo equivalente a um ano de ensino condensado em poucos meses.</li>
                    </ul>
                </div>

                {/* Maratona SBC */}
                <div className='event'>
                    <img src={maratonaSBC} alt='Maratona de Programação SBC 2024' className='event-image' />
                    <h3>Maratona de Programação SBC 2024</h3>
                    <p>
                        Com apoio do PCS, levamos cinco equipes da Poli para competir na Maratona de Programação SBC 2024.
                    </p>
                    <ul>
                        <li>Duas equipes classificadas no Top 10 regional.</li>
                        <li>Experiência enriquecedora para os participantes.</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Historic;
