import React, { Component } from 'react';
import axios from 'axios'
// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/navbar';
import Caraousel from './Caraousel/caraousel';
import Home from './Home/home';
import Footer from './Footer/footer';
import Login from './login/login';
import { Link, Route, Switch } from 'react-router-dom';
import Register from './register/register';
import Detail from './detail/detail';

class App extends Component {
 

  render() {
    return (
      <div>
            {/* <Route path="/login" component={Login}/>                         */}
        
        <Navbar/>  
        <Switch>
          <Route exact path="/" render={() => 
            <div>
              <Login/>
              <Caraousel/>
              <Home/>
            <Footer/>  
            </div>
          }/>   
          <Route path="/register" component={Register}/>    
          <Route path="/detail/:id" render={({ match }) => <Detail idProduct={match.params.id}/>}/>   
        </Switch>
      </div>
      
    );  
  }
}

export default App;
