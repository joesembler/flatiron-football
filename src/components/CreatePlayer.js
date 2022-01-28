import React, {useState} from "react";

function CreatePlayer(props){
    const [name, setName] = useState()
    const [jerseyNumber, setJerseyNumber] = useState()
    const [position, setPosition] = useState()
    const [teamID, setTeamID] = useState()
    const [image, setImage] = useState()

    function handleCreate(){
        fetch(`http://localhost:9292/players`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                jersey_number: jerseyNumber,
                position: position,
                team_id: teamID,
                img: image
            })
        })
        props.setChange(props.change)
    }

    return(
        <div className="CreatePlayer">
            <form> Name
            <input type="text" onKeyUp={(e) => setName(e.target.value)}></input>
            Jersey Number
            <input type="text"  onChange={(e) => setJerseyNumber(e.target.value)}></input>
            Position
            <input type="text" onChange={(e) => setPosition(e.target.value)}></input>
            Team ID
            <input type="text" onChange={(e) => setTeamID(e.target.value)}></input>
            Image
            <input type="text" onChange={(e) => setImage(e.target.value)}></input>
            </form>
            <button onClick={handleCreate}>Create Player</button>

        </div>
    )
}

export default CreatePlayer;