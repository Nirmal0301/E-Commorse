import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Axios from "axios";
export default class Signin extends React.Component{
    render(){
        return(

    <div>
        <div class="bgim1 d-flex flex-row justify-content-center">
        <div class="back">
            <div class="carbg">
                <h5 class="headd"> User Name </h5>
                <input type="textbox" name="tname"/>
                <h5 class="headd"> Phone Number </h5>
                <input type="phonenumber" name="phone number"/>
                <h5 class="headd"> Password </h5>
                <input type="password" name="password"/>
                <h5 class="headd"> Re Type Password </h5>
                <input type="password" name="password"/>
                <h5 class="headd"> Address </h5>
                <input type="address" class="address" name="address"/>
            </div>
            <div>
                <button class="bg-dark btn10 headd"> Sing In </button>
            </div>
            </div>
            </div>
    </div>
        );
    }
}