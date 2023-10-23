import React from 'react';

import { Link } from 'react-router-dom';

import '../css/navbar.css';

class Navbar extends React.Component{
    render(){
        return (
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/'><h1>Polibits</h1></Link>
                    <div className='navbar-links'>
                        <ul>
                            <li><Link to='/competicoes'>COMPETIÇÕES</Link></li>
                            <li><Link to='/pratique'>PRATIQUE</Link></li>
                            <li><Link to='/historico'>HISTÓRICO</Link></li>
                            <li><Link to='/sobrenos'>SOBRE NÓS</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;