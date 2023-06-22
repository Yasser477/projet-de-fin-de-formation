import React from 'react';
import Zed from "../../assets/Zed.png"
import "./LoginCss.css";

function login() {
  return (
    <div id="all">

      <h1>THE IMPOSTER</h1>

      <div id="cardLogin">
    
      <img src={Zed} id="zed" />

      <input type="text" name="username" placeholder='username' id="username" />
      <input type="password" name="password" placeholder='password' id="password" />

      <button id="submit"> submit </button>
    </div>
    </div>
  )
}

export default login