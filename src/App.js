import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import CreateSong from './Components/CreateSong/CreateSong';
import DisplaySongs from './Components/DisplaySongs/DisplaySongs';
import Footer from './Components/Footer/Footer';
import axios from 'axios';

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => { //this is used to render the list of songs on App execution
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/music/');
    setSongs(response.data);
  }

  async function createSong(newSong){
    let response = await axios.post('http://127.0.0.1:8000/music/', newSong);
    if(response.status === 201){
      await getAllSongs();
    }
  } 

  async function deleteSong(song){
    let response = await axios.delete(`http://127.0.0.1:8000/music/${song.id}/`);
    if(response.status === 200){
      await getAllSongs();
    }
  }

  return (
    <div className='page-container'>
      <div><NavBar/></div>
      <div><DisplaySongs displaySongs = {songs} deleteSongProp = {deleteSong}/></div> 
      <div className='content-wrap'><CreateSong addNewSong={createSong}/></div>
      <div><Footer/></div>
    </div>
  );
}

export default App;
