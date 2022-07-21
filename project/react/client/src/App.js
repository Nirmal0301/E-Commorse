// import logo from './logo.svg';
import './App.css';
import React from "react";
import Navbar from './component/navbar';
import Body from './component/body';
import Login from './component/login';
import Signin from './component/singin';
import Men from './component/men';
import Women from './component/women';
import Kids from './component/kids';
import Sports from './component/sports';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
  
import {BrowserRouter,Routes,Route} from 'react-router-dom';
export default class App extends React.Component{
  render(){
    return(
     <div>
      <BrowserRouter>
      <Routes>
        <Route index element = {<Body/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/signin" element = {<Signin/>}/>
        <Route path = "/men" element = {<Men/>}/>
        <Route path = "/women" element = {<Women/>}/>
        <Route path = "/kids" element = {<Kids/>}/>
        <Route path = "/Sports" element = {<Sports/>}/>
      </Routes>
      </BrowserRouter>
      
         
         
        
     </div>

    );
  }
}