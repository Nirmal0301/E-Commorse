import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {Link} from "react-router-dom";
export default class Navbar extends React.Component{
    render(){
        return(
             <div>
         <h5 class="bckg"> 10& CASH BACK WITH KOTAK CREDIT & DEBIT CARDS ON MIN. ORDER OF ₹3000.<u>t&c</u></h5> 
        <nav class=" bckg1 navbar navbar-expand-lg navbar-light ">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
            <img class="puma1" src="./images/puma.png" alt="..."/>
          
        
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
              <Link to="/login"> 
                <a class="nav-link text-light" href="/login"> Login <span class="sr-only">(current)</span></a>
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="/women"> Women </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="/men"> Men </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="/kids"> Kids </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="sports"> Sports </a>
              </li>
            </ul>
            <div class="form-inline my-2 my-lg-0">
              <img class="ser" src="./images/search.png" alt="..."/>
              <input class=" bckg1 form-control mr-sm-2" type="search" placeholder="SEARCH PUMA.COM" size="20px" aria-label="Search"/>
            </div>
            <img class="cart" src="./images/cart.png" alt="..."/>
            <img class="list" src="./images/list.jpg" alt="..."/>
          </div>
        </nav>
        </div> 
        

        );
    }
}
