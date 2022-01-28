import React,{useState, useEffect} from "react"
import Player from "./Player"

function Database (props){
    const [players, setPlayers] = useState([])
    console.log(props)

    useEffect(() => {
        console.log(props)
        setPlayers(props.players)
    }, [props.players])
    // if(props.players.length > 0){
    //     setPlayers(props.players)
    // }
    console.log(players)

    if(players.length > 0 ){
        console.log(players)

        let playerElements = [];
        players.forEach(player => {
            
            playerElements.push(<Player key={player.id} player={player} team={props.teams[player.team_id]} />)
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