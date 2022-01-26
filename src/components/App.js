import React, {useState, useEffect} from "react"
import { Route } from 'react-router-dom'
import Header from "./Header"
import Home from "./Home"
import Footer from "./Footer"
import Database from "./Database"

function App() {
    const [players, setPlayers] = useState([]);
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:9292/players`)
        .then(r => r.json())
        .then(setPlayers)

        fetch(`http://localhost:9292/teams`)
        .then(r => r.json())
        .then(setTeams)

    }, [])

    return (
        <div className="App">
            <Route exact path="/">
                <Header />
                <Home />
                <Footer />
            </Route>
            <Route exact path="/database">
                <Header />
                <Database players={players} teams={teams} />
                <Footer />
            </Route>
        </div>
    );
}

export default App;