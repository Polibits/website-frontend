import React from 'react';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

class Historic extends React.Component{
    render(){
        return (
            <div>
                <Navbar></Navbar>
                <h1>Histórico</h1>
                <Footer></Footer>
            </div>
        );
    }
}

export default Historic;