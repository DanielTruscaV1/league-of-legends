import React from 'react'
import image6 from "./images/image6.jpg";
import image7 from "./images/image7.webp";
import image8 from "./images/image8.jpg";
import image9 from "./images/image9.webp";
import image10 from "./images/image10.jfif";

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
      <h1>THE WAY TO VICTORY</h1>
      <p>To reach the enemy Nexus, your team must destroy all defensive structures on at least one aisle. These are the towers and the inhibitors. There are three towers and an inhibitor on each aisle, and each Nexus is guarded by two towers.</p>
      <h3>TOWERS</h3>
      <img src={image8}/>
      <p>The towers deal real damage against enemy minions and champions and give the Allied team limited vision in the mists of war. In order not to suffer damage, try to attack these structures only when you have minions in front of you.</p>
      <h3>INHIBITORS</h3>
      <img src={image9}/>
      <p>Each inhibitor is protected by a tower. When an inhibitor is destroyed, super minions will appear in its aisle for a few minutes. After that, the inhibitor regenerates and the super-minions stop appearing.</p>
      <h1>FACE THE DANGERS OF THE JUNGLE</h1>
      <img src={image10}/>
      <p>Between the colors is the jungle, where neutral monsters and plants live. The most important monsters are Baron Nashor and the dragons. If you manage to kill them, your team will receive unique buffs, which can change the course of the game.</p>
      <h3>BARON NASHOR</h3>
      <p>Baron Nashor is the most powerful monster in the jungle. If a team manages to kill the Baron, it receives a bonus to attack damage and strength of abilities, improved 'Recall', and the power of minions around its members increases significantly.</p>
      <h3>DRAGONS</h3>
      <p>Dragons are powerful monsters, which offer unique bonuses depending on the element of the slain dragon. In the game there are five elemental dragons and an ancient Dragon.</p>
    </div>
  )
}

export default Game