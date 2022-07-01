import React from 'react'
import image6 from "./images/image6.jpg";
import image7 from "./images/image7.webp";

function Game() {
  return (
    <div className="game">
      <h1>LEARN THE BASICS</h1>
      <p>There are many things to learn about LoL, so let's start with the basics. For a summary of the most popular game mode, read the guide below.</p>
      <h1>WHAT IS THE LEAGUE OF LEGENDS?</h1>
      <img src={image6}/>
      <p>League of Legends is a strategy game focused on team play, in which two teams of five formidable champions face off to destroy the enemy base. Choose one of over 140 champions, participate in epic phases, destroy your opponents and destroy enemy towers to ensure your victory.</p>
      <h1>DESTROY THE BASE</h1>
      <img src={image7}/>
      <p>The Nexus is the focal point of the two teams' bases. To win the game, your team must destroy the enemy Nexus.</p>
      <h3>THE NEXUS OF YOUR TEAM</h3>
      <p>The Nexus is where the minions appear on the map. Behind the Nexus is the fountain, the place where you can quickly recover your lost life and hand and from where you can access the store.</p>
      <h3>THE ENEMY NEXUS</h3>
      <p>The nexus in the enemy base is identical to the one in the base of your team. If your team manages to destroy the enemy Nexus, then the victory is yours.</p>

    </div>
  )
}

export default Game