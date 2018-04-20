import React from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Auth from '../Auth/Auth';
import Form from '../Form/Form';
import Post from '../Post/Post';
import {connect}  from 'react-redux'

function Nav(props) {
    console.log(props)
    return (
        <div>
            <Link to="/dashboard">
            <button>Home</button>
            </Link>

            <Link to ="/post/:postid">
            <button>New Post</button>
            </Link>

            <Link to ="/">
            <button>Logout</button>
            </Link>
            
            
        </div>
    )
}

function mapStateToProps(state) {
    const {username, img} = this.state
    return {
        username: state.user,
        img: state.img
    }
}

export default connect(mapStateToProps)(Nav);