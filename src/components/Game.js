import React from 'react'
import image6 from "./images/image6.jpg";
import image7 from "./images/image7.webp";
import image8 from "./images/image8.jpg";
import image9 from "./images/image9.webp";
import image10 from "./images/image10.jfif";
import image11 from "./images/image11.webp";
import image12 from "./images/image12.jpg";
import image13 from "./images/image13.PNG";

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
      <h1>CHOOSE YOUR COLOR</h1>
      <img src={image11}/>
      <p>The recommended team composition consists of five positions. Each aisle fits best with certain types of champions and roles - you can try to play all the aisles in a row or you can focus on the one you like best.</p>
      <h3>TOP LANE</h3>
      <p>The champions on the top aisle are the lone and resilient fighters of your team. Their goal is to protect their lane and focus their attacks on the strongest members of the opposing team.</p>
      <h3>JUNGLE</h3>
      <p>Junglers live to hunt down their enemies. I walk skilfully and cunningly from one corridor to another and keep an eye on the most important neutral monsters, attacking exactly when the opponents let their guard down.</p>
      <h3>MID LANE</h3>
      <p>The middle lane champions quickly cause enormous damage, both alone and with the team. For them, the fight is like a dangerous dance, in which they always try to find opportunities to catch their enemies on the wrong foot.</p>
      <h3>BOTTOM LANE</h3>
      <p>Downhill champions are the explosive force of your team. They are a precious resource, so you must be protected at the beginning of the game, until you gather enough gold and enough experience to be able to win the match for your team.</p>
      <h3>SUPPORT CHAMPION</h3>
      <p>Supporting champions are the team's goalkeepers. They keep their teammates alive and help them kill their opponents; In addition, it protects the colleague on the lower aisle until he becomes stronger.</p>
      <h1>INCREASE THE POWER OF YOUR CHAMPION</h1>
      <img src={image12}/>
      <p>Champions become stronger as they gain experience to move to the next level, as well as gold to buy stronger items. These two factors are crucial to dominate the enemy team and destroy its base.</p>
      <p>When champions gain a certain amount of experience, they automatically move to the next level and can unlock or improve certain skills; in addition, their basic attributes become stronger. You can gain experience by killing enemy units and champions, participating in an assassination, and destroying your opponent's defensive structures.</p>
      <p>Gold is the currency in the game through which you can buy items for your champion. You can collect gold by killing enemy units and champions, by participating in an assassination, by destroying your opponent's defensive structures, and when you equip items that offer gold.</p>
      <p>With the help of the store, you can buy items with the gold earned or sell them. The store can only be accessed from the fountain.</p>
      <h1>UNLOCK YOUR SKILLS</h1>
      <img src={image13}/>
      <p>Champions have five main abilities, two special spells and can keep up to seven items in inventory at the same time. In order for your team to win, you need to find out the optimal order for skills, what summoning spells to use and what items to buy.</p>
      <p>Most champions have a unique set of five abilities: one passive, three basic, and one supreme. These abilities can be used with the Q, W, E and R keys.</p>
      <p>Summoner spells are abilities with unique effects, which can be used by champions with the D and F keys. There are many spells of this type in the game, but the most commonly used are 'Flash', 'Teleport', 'Smite' and ' Ignition '.</p>
      <p>Objects improve the performance of the chosen champion: they increase his movement speed and damage and reduce his reactivation times of abilities. Unlike talismans, items cost gold to be purchased.</p>

    </div>
  )
}

export default Game