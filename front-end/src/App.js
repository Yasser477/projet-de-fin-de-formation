import React from 'react';
import {Routes , Route} from "react-router-dom" ;
import './App.css';
import Login from './components/LoginPage/Login';
import Start from './components/startGame/Start';
import MainMenu from './components/MainMenu/MainMenu';
import Players from './components/PlayersPage/Players';
import PlayMenu from './components/PlayMenu/PlayMenu';



function App() {
  return (
    <div className="App">
     <Routes>
     <Route path="/Login" element={<Login />}/>
     <Route path="/Start" element={<Start />}/>
     <Route path="/MainMenu" element={<MainMenu />}/>
     <Route path="/Players" element={<Players />}/>
     <Route path="/Play" element={<PlayMenu />}>
  
    
    
    
    
     </Route>
    
    
</Routes>




    </div>
  );
}

export default App;
