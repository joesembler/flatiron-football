import React from "react"

function Database (props){

    
    console.log(props)

    if(props.players.length > 0){

        const jerseyNumbers = props.players.map(player => {
        return(
            <h1>Name: {player.name} </h1>
           
            )
        });

        return(
        <div className="Database">
            {jerseyNumbers}
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