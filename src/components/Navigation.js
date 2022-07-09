import React from 'react'

function Navigation() {
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
        </ul>
    </div>
  )
}

export default Navigation