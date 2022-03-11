import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import CreateSong from './Components/CreateSong/CreateSong';

function App() {
  return (
    <div>
      <div><NavBar/></div>
      <div><CreateSong/></div>
    </div>
  );
}

export default App;
