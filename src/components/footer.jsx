import React from 'react';

import { Link } from 'react-router-dom';

import '../css/footer.css';
import polibitsLogo from '../assets/logo/LOGOTIPO POLIBITS - FUNDO TRANSPARENTE.png';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className='footer-container'>
                    <div className='content'>
                        <div className='logo-img'>
                            <img src={polibitsLogo}></img>
                        </div>
                        <div className="footer-contact">
                            <h3>contato</h3>
                            <p>E-mail: polibits.usp@gmail.com</p>
                        </div>
                        <div className='social-media'>
                            <h3>redes sociais</h3>
                            <ul>
                                <li><Link to='https://www.instagram.com/polibits.usp/'>instagram</Link></li>
                                <li><Link to='https://github.com/Polibits'>github</Link></li>
                                <li><Link to='https://discord.gg/arezHqz3'>discord</Link></li>
                                <li><Link to='/'>whatsapp</Link></li>
                            </ul>
                        </div>
                        <div className='important-links'>
                            <h3>links úteis</h3>
                            <ul>
                                <li><Link to='/competicoes'></Link>competicoes</li>
                                <li><Link to='/pratique'></Link>pratique</li>
                                <li><Link to='/historico'></Link>histórico</li>
                                <li><Link to='/sobrenos'></Link>sobre nós</li>
                            </ul>
                        </div>
                    </div>
                    <div className='copyright'>
                        <p>&copy; 2023 Polibits. Todos os direitos reservados</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;