import React from 'react';
//import { withRouter } from "react-router-dom"; //make component route-aware and get props from nearest loaded route

import './Post.css';

const post = (props) => (
        <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
)
    


export default post;
//export default withRouter(post);