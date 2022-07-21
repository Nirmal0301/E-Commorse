import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {Link} from "react-router-dom";

export default class Login extends React.Component{
    render(){

      
        return(
     <div>
       <div class="bgim1 d-flex flex-row justify-content-center">
		
		<div class=" back">
			<div class="carbg">
			<h5 class="headd"> User name </h5>
			<input type="textbox" name="tname" />
			<h5 class="passbg headd"> Password </h5>
			<input type="password" name="password"/>
			</div>
			<div>
				<button class="bg-dark btn10 headd"> Log in </button>
			</div>
			<div class="alin">
				<Link to="/signin">
		   <a> For Sign In </a>
		   </Link>
		</div>
		</div>
     </div>
	 </div>


        );
    }
}