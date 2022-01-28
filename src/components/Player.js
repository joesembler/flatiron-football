import React from "react";
import { Link } from 'react-router-dom';

function Player(props){
    console.log(props)
    return(
        <div className="Player">
            <Link to={`/players/${props.player.id}`}>
            <svg height="150" width="350">
            
                <rect width="1080" height="1080" fill="#3285a8" />
                <text fill="black" fontSize="30" fontFamily="Sans-serif" x="20" y="37">{props.player.name}</text>
                <text fill="white" fontSize="30" fontFamily="Sans-serif" x="18" y="35">{props.player.name}</text>

                <text fill="black" fontSize="20" fontFamily="Sans-serif" x="7" y="67">High: {props.player.stats.length > 0 ? props.player.stats[0].highest_score : "N/A"}</text>
                <text fill="#2ab041" fontSize="20" fontFamily="Sans-serif" x="5" y="65">High: {props.player.stats.length > 0 ? props.player.stats[0].highest_score : "N/A"}</text>
                
                <text fill="black" fontSize="20" fontFamily="Sans-serif" x="7" y="92">Average: {props.player.stats.length > 0 ? props.player.stats[0].average_score : "N/A"}</text>
                <text fill="#c5d932" fontSize="20" fontFamily="Sans-serif" x="5" y="90">Average: {props.player.stats.length > 0 ? props.player.stats[0].average_score : "N/A"}</text>
               
                <text fill="black" fontSize="20" fontFamily="Sans-serif" x="7" y="117">Low: {props.player.stats.length > 0 ? props.player.stats[0].lowest_score : "N/A"}</text>
                <text fill="#d93232" fontSize="20" fontFamily="Sans-serif" x="5" y="115">Low: {props.player.stats.length > 0 ? props.player.stats[0].lowest_score : "N/A"}</text>

                <text fill="black" fontSize="20" fontFamily="Sans-serif" x="7" y="142">Total: {props.player.stats.length > 0 ? props.player.stats[0].total_points : "N/A"}</text>
                <text fill="white" fontSize="20" fontFamily="Sans-serif" x="5" y="140">Total: {props.player.stats.length > 0 ? props.player.stats[0].total_points : "N/A"}</text>

                <text fill="white" fontSize="20" fontFamily="Sans-serif" x="165" y="75">Plays for:</text>
                <text fill="white" fontSize="20" fontFamily="Sans-serif" x="145" y="100">{props.team ? props.team.name : "N/A"}</text>
            </svg> 
            </Link> 
        </div>
    )
}

export default Player;