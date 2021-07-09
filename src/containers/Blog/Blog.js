import React, { Component } from 'react';
// import axios from 'axios';
//import axios from '../../axios';

import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Posts from '../Blog/Posts/Posts';
//import NewPost from './NewPost/NewPost';
//import FullPost from '../Blog/FullPost/FullPost'
import './Blog.css';
import asyncComponent from '../../hoc/asyncComponent';

const asyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true,
    }
    
    render () {    
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                            to="/posts/" 
                            exact
                            activeClassName="my-active"
                            activeStyle={{
                                color:'#fa923f',
                                textDecoration:'underline'
                            }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post', // creates absolute path always
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => Any HTML tag<Posts/>}/>*/}
                <Switch>
                    {this.state.auth ? <Route path="/new-post"  component = {asyncNewPost}/> : null}
                    <Route path="/posts"  component = {Posts}/>  
                    <Route render = {() => <h1> 404 Not found</h1>}/>
                    {/*<Redirect from="/" to="/posts"/>*/}
                    {/*<Route path="/"  component = {Posts}/> */}        
                </Switch>
                
            </div>
        );
    }
}

export default Blog;