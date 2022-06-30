import React from 'react'
import image5 from "./images/image5.webp";

function Signup() {
  return (
    <div className="sign-up">
        <form>
            <h1>Sign-up to create a new account!</h1>
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
            <button>Sing-up</button>
        </form>
        <img src={image5}/>
    </div>
  )
}

export default Signup