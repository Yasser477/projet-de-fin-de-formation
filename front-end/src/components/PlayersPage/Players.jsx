import React, { useEffect, useState } from 'react'
import './Player.css'
import remove from "../../assets/remove.png"
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Players() {

  const navigateTo = useNavigate();


  const[input,setInput]=useState({
    playerName:""
  })
  const [players,setplayers]=useState([])
  
  // const getPlayers=async()=>{
  //   const res = await axios.get("http://127.0.0.1:8000/api/show")
  //   // setplayers(res.data)
  //   console.log(players)
  // }
  const handleInputChange=(e)=>{
    
setInput({...input,playerName:e.target.value})
  }

  useEffect(()=>{
    // getPlayers()
  },[])
  
  const handleSubmit=async(e)=>{
    e.preventDefault()
    if (!!input.playerName) {
    setplayers([...players, input.playerName])
    setInput({playerName: ""})
    }
  }

  const start=async(e)=>{
    e.preventDefault()
    console.log(players)

    const res=await axios.post('http://127.0.0.1:8000/api/insert',{
      "players": players
      
    })
    navigateTo('/Play')
    console.log(res.data)
  }
  return (
    <div id="all">

<table>
  {players ? players.map(playerName => 
   ( <tr>
    <th>{playerName} <button id="deletebtn1" type="submit">X</button></th>
  </tr>))
   :"no player found"}


</table>

    <form onSubmit={handleSubmit}>
       <Link to="/Play"></Link>
    <div id='addPlayer'>
   
    <input onChange={handleInputChange} type="text" id='btnAdd' placeholder='ADD PLAYER'/>

    </div>
    <button type='submit' id='sbm'> + ADD </button>
    </form>


   

    <div id='lowerBtn'>

  

    <button type='submit' id='start' onClick={start}> START </button>
    </div>


    </div>
  )
}

export default Players