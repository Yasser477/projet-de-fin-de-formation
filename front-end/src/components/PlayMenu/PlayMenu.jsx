import black from "../../assets/black.png";
import blue from "../../assets/blue.png";
import brown from "../../assets/brown.png";
import green from "../../assets/green.png";
import pink from "../../assets/pink.png";
import red from "../../assets/red.png";
import purple from "../../assets/purple.png";
import { useNavigate } from "react-router-dom";
import "./PlayMenu.css";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";

function PlayMenu() {
  const navigate = useNavigate();

  const [players, setplayers] = useState([]);

  const getPlayers = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/show");
    setplayers(res.data);
    console.log(players);
  };

  useEffect(() => {
    getPlayers();
  }, []);

  const images = [black, blue, brown, green];
  return (
    <div>
      <div id="prfilePics" style={{ display: "flex", gap:"100px"  }}>
        {players
          ? players.map((player, index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={images[index]} alt="black" id="black" />{" "}
                  <span id="names"> {player.PlayerName} </span>
                </div>
              );
            })
          : "no player found"}
      </div>

      <div id="MidContainer"></div>

      <div id="spinner"></div>
    </div>
  );
}

export default PlayMenu;
