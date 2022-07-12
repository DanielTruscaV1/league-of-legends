import React from 'react'
import image3 from "./images/image3.jpg";

function Singin() {
  return (
    <div className="sign-in">
        <form>
            <h1>Sign-in to your account!</h1>
            <label for="name">Name: </label>
            <br/>
            <input name="name" type="text"/>
            <br/>
            <label for="email">Email: </label>
            <br/>
            <input name="email" type="email"/>
            <br/>
            <label for="password">Password: </label>
            <br/>
            <input name="password" type="password"/>
            <br/>
            <button>Sing-in</button>
        </form>
        <img src={image3}/>
    </div>
  )
}

export default Singin