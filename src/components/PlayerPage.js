import React, {useState, useEffect} from "react";
import { useParams } from "react-router";

function PlayerPage(props){
    const params = useParams();
    const [player, setPlayer] = useState({});
    const [team, setTeam] = useState({});

    useEffect(() => {
        if(props.players.length > 0){
            props.players.forEach(player => {
            if(player.id == params.id){
                setPlayer(player)
            }
        });
        }
    }, [params, props])

    useEffect(() => {
        console.log(player)
        props.teams.forEach(team => {
            if(team.id === player.team_id){
                setTeam(team)
            }
        })
    }, [player])

    if(player.name != null){
        return(
            <div className="Player">
                <h1>{player.name}</h1>
                <button onClick={(event) => props.toggleFavorite(event, player.id)}>{player.favorite ? "Remove From Favorites" : "Add to Favorites"}</button>
                <h3>Position: {player.position}</h3>
                
                
                <img src={player.img} alt={player.name} Image></img>
                <h2>{team.name}</h2>
                <h2>{player.stats[0].lowest_score}</h2>


                <svg height="150" width="350">
                
                    <rect width="1080" height="1080" fill="#3285a8" />
                    <text fill="black" fontSize="30" fontFamily="Sans-serif" x="21" y="37">2021/22 Fantasy Points</text>
                    <text fill="white" fontSize="30" fontFamily="Sans-serif" x="18" y="35">2021/22 Fantasy Points</text>

                    <text fill="black" fontSize="20" fontFamily="Sans-serif" x="8" y="67">Highest Weekly Score:</text>
                    <text fill="black" fontSize="20" fontFamily="Sans-serif" x="220" y="67">{player.stats[0].highest_score}</text>
                    <text fill="#2ab041" fontSize="20" fontFamily="Sans-serif" x="218" y="65">{player.stats[0].highest_score}</text>
                    
                    <text fill="black" fontSize="20" fontFamily="Sans-serif" x="7" y="92">Average Weekly Score:</text>
                    <text fill="black" fontSize="20" fontFamily="Sans-serif" x="220" y="92">{player.stats[0].average_score}</text>
                    <text fill="#c5d932" fontSize="20" fontFamily="Sans-serif" x="218" y="90">{player.stats[0].average_score}</text>
                
                    <text fill="black" fontSize="20" fontFamily="Sans-serif" x="7" y="117">Lowest Weekly Score:</text>
                    <text fill="black" fontSize="20" fontFamily="Sans-serif" x="220" y="117">{player.stats[0].lowest_score}</text>
                    <text fill="#d93232" fontSize="20" fontFamily="Sans-serif" x="218" y="115">{player.stats[0].lowest_score}</text>

                    
                    <text fill="white" fontSize="20" fontFamily="Sans-serif" x="5" y="140">Total: {player.stats[0].total_points}</text>
                </svg> 
            </div>
        )
    }
    else{
        return(
        <div className="Player">
           Loading...  
        </div>
        )
    }
    
}

export default PlayerPage;