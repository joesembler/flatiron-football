import React,{useState, useEffect} from "react"
import Player from "./Player"

function Database (props){
    const [players, setPlayers] = useState([])

    useEffect(() => {
        if(props.players.length > 0){
            setPlayers(props.players)
        }
    }, [])
    console.log(props)

    if(players.length > 0 && props.teams.length > 0){

        const playerElements = players.map(player => {
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