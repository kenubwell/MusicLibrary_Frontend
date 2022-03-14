import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import CreateSong from './Components/CreateSong/CreateSong';
import DisplaySongs from './Components/DisplaySongs/DisplaySongs';
import axios from 'axios';

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  })

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/music/');
    setSongs(response.data);
  } 


  return (
    <div>
      <div><NavBar/></div>
      <div><DisplaySongs displaySongs={songs}/></div> 
      <div><CreateSong/></div>
    </div>
  );
}

export default App;
