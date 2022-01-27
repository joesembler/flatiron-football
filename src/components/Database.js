import React from "react"
import Player from "./Player"

function Database (props){
    console.log(props)

    if(props.players.length > 0 && props.teams.length > 0){

        const playerElements = props.players.map(player => {
            return(
                <Player key={player.id} player={player} team={props.teams[player.team_id]} />
            )
        });

        return(
        <div className="Database">
            {playerElements}
        </div>
    );
    }
    else{
        return (
            <div className="Database">
                Loading...
            </div>
        )
    }
    
}

export default Database;