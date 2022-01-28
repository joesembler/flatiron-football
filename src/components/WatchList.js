import React, {useState, useEffect} from "react";
import Database from "./Database";

function Watchlist(props){
    const [displayPlayers, setDisplayPlayers] = useState([]); 

    console.log(props.players)
    
    useEffect(() => {
        const variable = props.players.filter(player => {
            return player.favorite === true
        })
        console.log(variable)
        setDisplayPlayers(variable);
    }, []);
        
    if(displayPlayers.length > 0){
        
        return (
            <div className="Watchlist">
                <Database players={displayPlayers} teams={props.teams} />
            </div>
        )
    }
    else {
       return(
        <div className="Home">
            <p> No Favorite players yet </p>
        </div>
        ) 
    }
    
}

export default Watchlist;