import React from 'react';

import Navbar from '../components/navbar';

class InitialPage extends React.Component{
    render(){
        return (
            <div>
                <Navbar></Navbar>
                <h1>Página Inicial</h1>
            </div>
        );
    }
}

export default InitialPage;