import React from 'react';

import '../css/pageContent.css';
import '../css/initialPage.css';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

import Post from '../components/post';

import polibitsLogo from '../assets/logo/LOGOTIPO POLIBITS - FUNDO TRANSPARENTE.png'

class InitialPage extends React.Component{
    render(){
        return (
            <div>
                <div>
                    <Navbar></Navbar>
                    <div className='page-content'>
                        <div className='logo-div'>
                            <img alt='logo' src={polibitsLogo}></img>
                        </div>
                        <Posts></Posts>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

class Posts extends React.Component{
    render(){
        return(
            <div className='posts'>
                <Post title='ACM-ICPC 2023' textBody='texto aleatório para teste texto aleatório para teste texto aleatório para teste texto aleatório para teste'></Post>
            </div>
        )
    }
}

export default InitialPage;