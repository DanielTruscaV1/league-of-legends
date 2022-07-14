import React, {useState} from 'react'
import image14 from "./images/image14.png";
import Aatrox from "./championImages/aatrox.webp";
import Ahri from "./championImages/ahri.webp";
import Akali from "./championImages/akali.webp";
import Akshan from "./championImages/akshan.webp";
import Alistar from "./championImages/alistar.webp";
import Amumu from "./championImages/amumu.webp";

function Champions() {
  const [championImages, setChampionImages] = useState([Aatrox, Ahri, Akali, Akshan, Alistar, Amumu]);
  return (
    <div className="champions">
        <h1>Meet the champions!</h1>
        <img src={image14}/>
        <p>Out of the over 140 champions, you will surely find one that fits perfectly with your style of play. Learn to play with one or master them all.</p>
        <div className="champions2">
          {championImages.map((image, index) => 
            (index+1)%5 === 0 ? 
            <> 
              <img src={image}/>
              <br/>
            </>
            :
            <img src={image}/>
            )}
        </div>
    </div>
  )
}

export default Champions