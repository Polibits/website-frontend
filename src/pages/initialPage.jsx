import React from 'react';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

class InitialPage extends React.Component{
    render(){
        return (
            <div>
                <Navbar></Navbar>
                <h1>Página Inicial</h1>
                <Footer></Footer>
            </div>
        );
    }
}

export default InitialPage;