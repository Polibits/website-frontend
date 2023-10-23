import React from 'react';

import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className='footer-container'>
                    <div className='logo-img'>
                    </div>
                    <div className="footer-contact">
                        <h3>Contato</h3>
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
                    <div className='copyright'>
                        &copy; 2023 Polibits. Todos os direitos reservados.
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;