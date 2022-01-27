import React, {useState, useEffect} from "react";
import { useParams } from "react-router";

function PlayerPage(props){
    const params = useParams();
    const [player, setPlayer] = useState({});

    useEffect(() => {
        if(props.players.length > 0){
            console.log(params.id)

            props.players.forEach(player => {
            if(player.id == params.id){
                setPlayer(player)
            }
        });
        }
        
    }, [params])



    if(player != null){
        return(
            <div className="Player">
                <h1>{player.name}</h1>
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