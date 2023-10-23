import React from 'react';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

class Practice extends React.Component{
    render(){
        return (
            <div>
                <Navbar></Navbar>
                <h1>Pratique!</h1>
                <Footer></Footer>
            </div>
        );
    }
}

export default Practice;