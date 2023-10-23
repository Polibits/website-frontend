import React from 'react';

class Navbar extends React.Component{
    render(){
        return (
            <nav>
                <h1>Polibits</h1>
                <ul>
                    <li><a href='/competicoes'>competições</a></li>
                    <li><a href='/pratique'>pratique</a></li>
                    <li><a href='/historico'>histórico</a></li>
                    <li><a href='/sobrenos'>sobre nos</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;