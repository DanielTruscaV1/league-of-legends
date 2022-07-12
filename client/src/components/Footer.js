import React from 'react'
import image4 from "./images/image4.PNG";

function Footer() {
  return (
    <div className="footer">
        <ul>
            <li>Notifications</li>
            <li>Terms of use</li>
            <li>Cookie Policy</li>
        </ul>
        <img src={image4}/>
        <br/>
        <div className="socialMedia">
          <ul>
            <li><a href="#" className="fa fa-youtube"></a></li>
            <li><a href="#" className="fa fa-twitter"></a></li>
            <li><a href="#" className="fa fa-facebook"></a></li>
            <li><a href="#" className="fa fa-instagram"></a></li>
            <li><a href="#" className="fa fa-reddit"></a></li>
          </ul>
        </div>
    </div>
  )
}

export default Footer