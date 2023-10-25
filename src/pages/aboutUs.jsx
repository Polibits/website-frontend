import React from 'react';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

import Post from '../components/post';

class AboutUs extends React.Component{
    render(){
        return (
            <div>
                <div>
                    <Navbar></Navbar>
                    <div className='page-content'>
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

export default AboutUs;