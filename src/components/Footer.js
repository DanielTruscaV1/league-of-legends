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
    </div>
  )
}

export default Footer