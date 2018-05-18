import React, { Component } from 'react';
import axios from 'axios'

class Register extends Component{

    register = e => {
		e.preventDefault();
		axios.post('http://localhost:3030/login/register', { 
			email : this.refs.email.value,
			password : this.refs.password.value,
            nama : this.refs.nama.value,
            user_mobile : this.refs.user_mobile.value
		})
		this.refs.formSubmit.reset()
	}

    render(){
        return(
                <div class="container">		
                    <form ref="formSubmit" className='form'>
							<div className="cole">
								<h1>Sign Up</h1>
									<p>Please fill in this form to create an account.</p>
								<hr />
								
								<input type="text" placeholder="Enter Email" name="email" ref='email' required />
								<input type="password" placeholder="Enter Password" name="psw" ref='password' required />
								<input type="text" placeholder="Nama Depan" name="nama" ref='nama'  required />
								<input type="text" placeholder="No telp" name="nama" ref='user_mobile'  required />

								<div className="clearfix">
								<input className='buttonregister' type="submit" value="register" onClick={(e) => this.register(e)} />
								</div>
							</div>
						</form>
	            </div>                
        )
    }
}

export default Register;