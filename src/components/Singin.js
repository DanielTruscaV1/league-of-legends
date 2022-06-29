import React from 'react'

function Singin() {
  return (
    <div className="sign-in">
        <h1>Sign-in to your account!</h1>
        <form>
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
    </div>
  )
}

export default Singin