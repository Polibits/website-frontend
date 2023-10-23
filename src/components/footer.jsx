import React from 'react';

import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className='footer-container'>
                    <div className='logo-img'>
                    </div>
                    <div class="footer-contact">
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

/*
<footer>
  <div class="footer-container">
    <div class="footer-links">
      <h3>Links Principais</h3>
      <ul>
        <li><a href="/">Página Inicial</a></li>
        <li><a href="/competicoes">Competições</a></li>
        <li><a href="/pratique">Pratique</a></li>
        <li><a href="/sobre-nos">Sobre Nós</a></li>
      </ul>
    </div>

    <div class="footer-social">
      <h3>Redes Sociais</h3>
      <ul>
        <li><a href="https://www.instagram.com/seuinstagram" target="_blank">Instagram</a></li>
        <li><a href="https://github.com/seugithub" target="_blank">GitHub</a></li>
        <li><a href="https://api.whatsapp.com/send?phone=SEUNUMERODEWHATSAPP" target="_blank">WhatsApp</a></li>
        <li><a href="https://discord.gg/seudiscord" target="_blank">Discord</a></li>
      </ul>
    </div>
  </div>

  <div class="footer-copyright">
    <p>&copy; 2023 Polibits. Todos os direitos reservados.</p>
  </div>
</footer>

 */