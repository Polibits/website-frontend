import React from 'react';

import '../css/initialPage.css';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

import polibitsLogo from '../assets/logo/LOGOTIPO POLIBITS - FUNDO TRANSPARENTE.png'

class InitialPage extends React.Component{
    render(){
        return (
            <div>
                <Navbar></Navbar>
                <div className='page-content'>
                    <div className='logo-div'>
                        <img alt='logo' src={polibitsLogo}></img>
                    </div>
                    <div className='post'>
                        <h1>ACM-ICPC 2022</h1> <hr></hr>
                        <p>texto</p>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default InitialPage;