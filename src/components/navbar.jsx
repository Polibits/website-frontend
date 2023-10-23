import React from 'react';

class Navbar extends React.Component{
    render(){
        return (
            <div>
                <h1>Polibits</h1>
                <ul>
                    <li><a href=''>Competições</a></li>
                    <li><a href=''>Pratique</a></li>
                    <li><a href=''>Histórico</a></li>
                    <li><a href=''>Sobre Nós</a></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;