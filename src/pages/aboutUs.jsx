import React from 'react';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

class AboutUs extends React.Component{
    render(){
        return (
            <div>
                <Navbar></Navbar>
                <h1>Sobre Nós</h1>
                <Footer></Footer>
            </div>
        );
    }
}

export default AboutUs;