import React, {useState, useEffect} from "react"
import { Route } from 'react-router-dom'
import Header from "./Header"
import Home from "./Home"
import Footer from "./Footer"
import Database from "./Database"
import Search from "./Search"
import PlayerPage from "./PlayerPage"
import Watchlist from "./Watchlist"
import CreatePlayer from "./CreatePlayer"

function App() {
    const [players, setPlayers] = useState([]);
    const [displayPlayers, setDisplayPlayers] = useState([]);
    const [teams, setTeams] = useState([]);
    const [change, setChange] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:9292/players`)
        .then(r => r.json())
        .then(d => {
            console.log(d)
            setPlayers(d)
            setDisplayPlayers(d)
        })

        fetch(`http://localhost:9292/teams`)
        .then(r => r.json())
        .then(setTeams)

    }, [change])

    function handleSearch(results){
        setDisplayPlayers(results)
    }

    function toggleFavorite(event, player){
        console.log(player)
        event.preventDefault();
        fetch(`http://localhost:9292/players/${player.id}`, {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({favorite: !player.favorite})
        })
       setChange(!change)

    }

    console.log(displayPlayers)

    return (
        <div className="App">
            <Route exact path="/">
                <Header />
                <Home />
                <Footer />
            </Route>
            <Route exact path="/players">
                <Header />
                <Search players={players} onSearch={handleSearch} />
                <Database players={displayPlayers} teams={teams} />
                <Footer />
            </Route>
            <Route exact path="/players/:id">
                <Header />
                <PlayerPage players={players} teams={teams} toggleFavorite={toggleFavorite}/>
                <Footer />
            </Route>
            <Route exact path="/watchlist">
                <Header />
                <Watchlist players={players} teams={teams}/>
                <Footer />
            </Route>
            <Route exact path="/create">
                <Header />
                <CreatePlayer change={change} setChange={setChange}/>
                <Footer />
            </Route>
        </div>
    );
}

export default App;