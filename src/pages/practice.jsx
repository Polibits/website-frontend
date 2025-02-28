import React from 'react';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

import Post from '../components/post';

class Practice extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className='page-content'>
                    <LearningPlan />
                </div>
                <Footer />
            </div>
        );
    }
}

class LearningPlan extends React.Component {
    render() {
        return (
            <div className='learning-plan'>
                <h2>Plano de Aprendizado</h2>

                <h3>Para quem nunca programou</h3>
                <p>
                    Recomendamos começar aprendendo a sintaxe da linguagem C++ por meio de tutoriais no YouTube ou do livro mencionado nos próximos tópicos. Após isso, é ideal praticar no site <a href='https://usaco.guide/bronze' target='_blank' rel='noopener noreferrer'>USACO Guide (nível Bronze)</a>.
                </p>
                <p>
                    Se tiver dúvidas, pode perguntar ao pessoal do grupo! Também sugerimos instalar o <strong>Visual Studio Code</strong> para escrever código e o <strong>Ubuntu-WSL</strong> para simular um ambiente Linux (procure mais informações no ChatGPT).
                </p>
                <p>
                    Além disso, ler blogs ou assistir vídeos sobre programação competitiva pode ajudar a entender melhor se essa área te interessa.
                </p>

                <h3>Para quem já programou, mas é iniciante</h3>
                <p>
                    A melhor forma de melhorar é praticar resolvendo problemas! Para aprender tópicos específicos, recomendamos o 
                    <a href='https://usaco.guide' target='_blank' rel='noopener noreferrer'> USACO Guide</a>. 
                </p>
                <p>
                    Para praticar problemas, utilize a aba <a href='https://codeforces.com/problemset' target='_blank' rel='noopener noreferrer'>Problemset do Codeforces</a> ou gere listas de exercícios aleatórios com o <a href='https://karimelghamry.github.io/Codeforces-Randomizer/' target='_blank' rel='noopener noreferrer'>Codeforces Randomizer</a>.
                </p>

                <h3>⚡ Para quem já é experiente</h3>
                <p>
                    Basta comparecer aos nossos encontros e participar dos contests semanais! Além disso, mantenha uma rotina diária de prática resolvendo problemas no <a href='https://codeforces.com/' target='_blank' rel='noopener noreferrer'>Codeforces</a> e analisando problemas de maratonas passadas.
                </p>
            </div>
        );
    }
}

export default Practice;