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
            <li><a href="#" class="fa fa-youtube"></a></li>
            <li><a href="#" class="fa fa-twitter"></a></li>
            <li><a href="#" class="fa fa-facebook"></a></li>
            <li><a href="#" class="fa fa-instagram"></a></li>
            <li><a href="#" class="fa fa-reddit"></a></li>
          </ul>
        </div>
    </div>
  )
}

export default Footer