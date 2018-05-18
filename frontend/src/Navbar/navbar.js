import React, { Component } from 'react';
import { Link, Route }from 'react-router-dom';
import Login from '../login/login';
import Register from '../register/register';
import axios from 'axios'
import logo from '../img/logo.png'


class Navbar extends Component{
  
    render(){
        return(
            <nav class="navbar-inverse">
            <div class="container-fluid">
              <div class="navbar-header">
                {/* <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>                        
                </button> */}
              
                <a class="navbar-brand" href="#" ><img src={logo} style={{height:30, width:120}} alt="Image" /></a>
              </div>
              <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav">
                  <li><Link to = '/'>Home</Link></li>
                  <li><a href="#">Explore</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                  {/* <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li> */}
                  <li><Link to="/register"><span className="glyphicon glyphicon-register"></span> Register</Link></li>                  
                  
                </ul>
              </div>
            </div>
          </nav> 
        )
      }
    }

    export default Navbar;