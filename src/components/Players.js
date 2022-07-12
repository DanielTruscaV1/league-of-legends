import React, {useState} from 'react';
import axios from 'axios';

function Players() {
  const [searchText, setSearchText] = useState("");
  const [gameList, setGameList] = useState([]);
  function getPlayerGames(event)
  {
    axios.get("http://localhost:4000/past5Games")
    .then(function(response){
      setGameList(response.data);
    })
    .catch(function(error){
      console.log(error);
    })
  }
  console.log(gameList);
  return (
    <div className="players">
      <h1>League of Legends Player Searcher</h1>
      <input type="text" placeholder="Search for a player..." onChange={e => setSearchText(e.target.value)}/>
      <button onClick={getPlayerGames}>Search</button>
    </div>
  )
}

export default Players;