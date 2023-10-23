import React from 'react';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

class Competitions extends React.Component{
    render(){
        return (
            <div>
                <Navbar></Navbar>
                <h1>Competições</h1>
                <Footer></Footer>
            </div>
        );
    }
}

export default Competitions;