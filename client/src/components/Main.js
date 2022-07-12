import React from 'react'
import image2 from "./images/image2.jpg";

function Main() {
  return (
    <div className="main">
        <h1>Welcome to League Of Legends!</h1>
        <p>League of Legends is a strategy game focused on team play, in which two teams of five formidable champions face off to destroy the enemy base. Choose one of over 140 champions, take part in epic rounds, destroy your opponents and destroy enemy towers to ensure your victory.</p>
        <img src={image2}/>
    </div>
  )
}

export default Main