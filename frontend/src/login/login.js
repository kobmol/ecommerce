import React, { Component } from 'react';
import axios from 'axios'

class Login extends Component{
    
    login = e => {
		e.preventDefault();
		axios.post('http://localhost:3030/login', { 
			email : this.refs.email.value,
            password : this.refs.password.value
		})
        this.refs.formSubmit.reset()
	}

    render(){
        return(
                <form ref="formSubmit">
                    <input type="text" name="username" placeholder="Email" ref='email' required />
                    <input type="password" name="password" placeholder="Password" ref='password' required />
                    <input type="submit" value="Login" onClick={(e) => this.login(e)} />
                </form>                         
        )
    }
}

export default Login;