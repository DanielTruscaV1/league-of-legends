import React, {useState} from 'react'

function Navigation() {
  const [whiteMode, setWhiteMode] = useState(true); 
  function handleClick()
  {
    setWhiteMode(!whiteMode);
    if(whiteMode === true)
      document.body.classList.add("dark-mode");
    else
      document.body.classList.remove("dark-mode");
  }
  return (
    <div className="navigation">
        <ul>
            <li><a href="http://localhost:3000/">Home</a></li>
            <li><a href="http://localhost:3000/game">The game</a></li>
            <li><a href="http://localhost:3000/champions">Champions</a></li>
            <li>Items</li>
            <li>Runes</li>
            <li>Universe</li>
            <li>Arcane</li>
            <li><a href="http://localhost:3000/signin">Sign-in</a></li>
            <li><a href="http://localhost:3000/signup">Sign-up</a></li>
            <li><a href="http://localhost:3000/players">Players</a></li>
        </ul>
        <button onClick={handleClick}>{whiteMode?"Dark mode":"White mode"}</button>
    </div>
  )
}

export default Navigation