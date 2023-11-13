import React from 'react';

import { Link } from 'react-router-dom';

class Post extends React.Component {
    render() {
        return (
            <div className='post'>
                <h1>{this.props.title}</h1>
                <hr></hr>
                <div className='pre-text-body'>
                    <p>{this.props.textBody}</p>
                </div>
                <div className='main-picture'>
                    <figure>
                        <img alt='' src={this.props.mainPicture}></img>
                        <figcaption>{this.mainPictureCaption}</figcaption>
                    </figure>
                </div>
                <div className='main-text-body'>
                    <p>{this.props.textBody}</p>
                </div>
            </div>
        );
    }
}

export default Post;