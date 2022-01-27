import React, {useState, useEffect} from "react";

function Search (props){
    const [querey, quereySetter] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        setResults(props.players.filter(player => player.name.toLowerCase().includes(querey)).map(player => player));
        props.onSearch(results);
    }, [querey])

    return (
        <div className="Search">
        <input
            id="searchBar"
            type="text"
            placeholder="Search for a crypto!"
            value={querey}
            onChange={(e) => quereySetter(e.target.value)}
            onSubmit={(e) => {
                e.preventDefault();
                props.onSearch(results);
            }}
            onKeyUp={(e) => {
                e.preventDefault();
                props.onSearch(results);
            }}
        />
        </div>
    );
}

export default Search;