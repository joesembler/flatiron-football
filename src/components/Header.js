import React from "react";
import { Link } from 'react-router-dom';
import logo from "../images/flatiron-football-logo.png"


function Header (){
   
    return(
        <div className="Header">
            <Link to='/'>
                <img id="flatironFootballLogo" src={logo} alt="flatiron football logo"/>
            </Link>
            

            <div className="pageLinks">
                <Link id="dataBaseButton" to='/players'><button id="dataBaseButton">Database</button></Link>
                <Link id="watchListButton" to='/watchlist'><button id="watchListButton">Watchlist</button></Link>
                <Link id="createPlayerButton" to='/create'><button id="watchListButton">Create</button></Link>
            </div>   
            
        </div>
    );
}

export default Header;