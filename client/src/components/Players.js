import React, {useState} from 'react';
import axios from 'axios';

function Players() {
  const [searchText, setSearchText] = useState("");
  const [gameList, setGameList] = useState([]);
  function getPlayerGames(event)
  {
    axios.get("http://localhost:4000/past5Games", {params: {username: searchText}})
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
      {
        gameList.length !== 0 ? 
        <>
          <p>Player name: vlotz</p>
          <p>The last 5 games:</p>
          {
            gameList.map((gameData, index) => 
              <>
                <p>Game {index+1}</p>
                <div>
                  {gameData.info.participants.map((data, participantsIndex) => 
                    <>
                      <p>Player {participantsIndex+1}</p>
                      <p>KDA: {data.kills}/{data.deaths}/{data.assists}</p>
                      <p>Champion: {data.championName}</p>
                      <p>Level: {data.champLevel}</p>
                    </>
                  )}
                </div>
              </>
            )
          }
        </>
        :
        <>
          <p>No data</p>
        </>
      }
    </div>
  )
}

export default Players;