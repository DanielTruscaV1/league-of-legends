import React from 'react'

function Navigation() {
  return (
    <div className="navigation">
        <ul>
            <li><a href="http://localhost:3000/">Home</a></li>
            <li>The game</li>
            <li>Champions</li>
            <li>Items</li>
            <li>Runes</li>
            <li>Universe</li>
            <li>Arcane</li>
            <li><a href="http://localhost:3000/Signin">Sign-in</a></li>
            <li><a href="http://localhost:3000/Signup">Sign-up</a></li>
        </ul>
    </div>
  )
}

export default Navigation