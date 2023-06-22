import React from 'react'
import './Menu.css';
import mainBG from "../../assets/mianBG.png"
import Yellowmogus from "../../assets/Yellowmogus.png"
import crown from "../../assets/crown.png"
import coin from "../../assets/coin.png"
import offline from "../../assets/offline.png"
import online from "../../assets/online.png"
import shop from "../../assets/shop.png"
import { Link } from "react-router-dom";


function MainMenu() {
  return (
    <div >

    <div id='profile'>
    <div id='circle'>
    <img src={Yellowmogus} id="profile" />
    </div>
    <h1 id="namePrf"> YASSER 4747 </h1>
    </div>



    <div id='win'>
    <img src={crown} id="crown" />
    <h1 id='numWin'> 25 </h1>
    </div>


    <div id='coins'> 
        <img src={coin} id="coin" />
        <h1 id='numCoins'> 1290 </h1>

    </div>



    
    <div id='offline'>
    <Link to="/Players"  >
    <img src={offline} id="offpic" />
    </Link>
    </div>


    <div id='online'>
    <img src={online} id="onpic" />
    </div>


    <div>
        <img src={shop} id="shop" />
    </div>

    
    </div>

    
    
  )
}

export default MainMenu