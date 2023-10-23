import React from 'react';

import { Link } from 'react-router-dom';

class Navbar extends React.Component{
    render(){
        return (
            <nav>
                <Link to='/'><h1>Polibits</h1></Link>
                <ul>
                    <li><Link to='/competicoes'>COMPETIÇÕES</Link></li>
                    <li><Link to='/pratique'>PRATIQUE</Link></li>
                    <li><Link to='/historico'>HISTÓRICO</Link></li>
                    <li><Link to='/sobrenos'>SOBRE NÓS</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;