import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {connect}  from 'react-redux';
import {displayUser} from '../../redux/reducer';

class Auth extends Component {
    constructor(){
        super()

        this.state = {
            username: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
    }

    handleChange(event) {
        this.setState( { [event.target.name]: event.target.value});
        console.log(this.state)
    }
  
    register() {
        const newUser = {username: this.state.username, password: this.state.password}
        axios.post('/api/auth/register', newUser)
        this.props.history.push("/dashboard");
    }

    login() {
        const user = {username: this.state.username, password: this.state.password}
        axios.post('/api/auth/login', user)
        .then( res => displayUser(res));
        this.props.history.push("/dashboard");
    }

    render() {
        return (
            <div>
                
               <h1>Please log in</h1>
               <label> Username:
               <input type='text' name='username' onChange={this.handleChange}/>
               </label>
               <label> Password:
               <input type='text' name='password' onChange={this.handleChange}/>
               </label>
               <button onClick={this.login}>Login</button>
               <button onClick={this.register}>Register</button>
            
            </div>
        )
    }
}   

export default connect(null)(displayUser)