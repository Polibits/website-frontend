import React from 'react';

import '../css/pageContent.css';
import '../css/initialPage.css';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

import Post from '../components/post';

import polibitsLogo from '../assets/logo/LOGOTIPO POLIBITS - FUNDO TRANSPARENTE.png'

class InitialPage extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className='page-content'>
                    <div className='logo-div'>
                        <img alt='logo' src={polibitsLogo} style={{ display: 'block', margin: '0 auto', width: '25%', height: '25%' }}/>
                    </div>
                    <Description />
                </div>
                <Footer />
            </div>
        );
    }
}

class Description extends React.Component {
    render() {
        return (
            <div className='description'>
                <h2>🚀 O que é Programação Competitiva?</h2>
                <hr></hr>
                <p>
                    Programação competitiva é um <strong>esporte mental</strong> no qual competidores resolvem desafios de programação no menor tempo possível. 
                    Esses desafios exigem <strong>lógica, matemática, algoritmos e estruturas de dados</strong> para serem solucionados corretamente.
                </p>
                <p>
                    Cada problema apresenta um cenário com <strong>entradas</strong> (dados de entrada) e espera <strong>saídas corretas</strong> (solução para aquele caso).
                </p>
                <br></br>

                <h3>🌍 Competições ao redor do mundo</h3>
                <hr></hr>
                <p>Milhares de pessoas, de iniciantes a experts, participam de competições como:</p>
                <br></br>
                <ul>
                    <li><strong>ICPC</strong> (International Collegiate Programming Contest)</li>
                    <li><strong>Maratona de Programação da SBC</strong></li>
                    <li><strong>Codeforces, AtCoder, CodeChef, Leetcode, Hackerrank</strong></li>
                    <li>... e muitas outras!</li>
                </ul>
                <br></br>

                <h3>💡 O que é o PoliBits?</h3>
                <hr></hr>
                <p>
                    O <strong>PoliBits</strong> é a comunidade de programação competitiva da Poli-USP! Nosso objetivo é:
                </p>
                <ul>
                    <li><strong>Aprimorar habilidades</strong> em algoritmos e lógica</li>
                    <li><strong>Treinar e participar</strong> de competições nacionais e internacionais</li>
                    <li><strong>Criar um ambiente colaborativo</strong> de aprendizado</li>
                </ul>
                <br></br>

                <p>🔹 <strong>Quer aprender e competir com a gente?</strong> Vem pro PoliBits!</p>
            </div>
        );
    }
}

export default InitialPage;