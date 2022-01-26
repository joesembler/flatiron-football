import React from "react";
import { Link } from 'react-router-dom';
import logo from "../images/flatiron-football-logo.png"


function Header (){
   
    return(
        <div className="Header">
            <img id="flatironFootballLogo" src={logo} alt="flatiron football logo"/>

            <div className="pageLinks">
                <Link id="homeButton" to='/'><button id="homeButton">Home</button></Link>
                <Link id="watchListButton" to='/watchlist'><button id="watchListButton">Watchlist</button></Link>
            </div>   
            
        </div>
    );
}

export default Header;