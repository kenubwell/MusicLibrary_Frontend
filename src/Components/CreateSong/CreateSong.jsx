import React, { useState } from 'react';
import './CreateSong.css';

const CreateSong = (props) => {

    const [songTitle, setTitle] = useState(''); //state variables for the form
    const [songArtist, setArtist] = useState(''); 
    const [songAlbum, setAlbum] = useState(''); 
    const [releaseDate, setReleaseDate] = useState(''); 
    const [songGenre, setGenre] = useState(''); 


    function handleSubmit(event){
        event.preventDefault(); //this prevents the page from refreshing when the submit button is pressed
        let newSong = {
            songTitle: songTitle,
            songArtist: songArtist,
            songAlbum: songAlbum,
            releaseDate: releaseDate,
            songGenre: songGenre
        }

        console.log(newSong); //TODO: remove later
        //props.addNewSong(newSong);
        setTitle(""); //this is to clear the text that was entered in the form
        setArtist(""); 
        setAlbum(""); 
        setReleaseDate(""); 
        setGenre(""); 
    }


    return (  

    //self note: in the label 'for' my browser inspector gave a Warning Error and recommended changing 'for' to 'htmlFor'
    <form onSubmit = {handleSubmit}>
        <div>
            <label htmlFor = 'Title'>Title</label>
            <input type = 'text' id = 'Title' placeholder = 'Song Title' value={songTitle} onChange={(event) => setTitle(event.target.value)}/> 
        </div>
        <div>
            <label htmlFor = 'Artist'>Artist</label>
            <input type = 'text' id = 'Artist' placeholder = 'Artist Name' value = {songArtist} onChange={(event) => setArtist(event.target.value)}/>
        </div>
        <div>
            <label htmlFor = 'Album'>Album</label>
            <input type = 'text' id = 'Album' placeholder = 'Album title' value={songAlbum} onChange={(event) => setAlbum(event.target.value)}/> 
        </div>
        <div>
            <label htmlFor = 'Release'>Release Date</label>
            <input type = 'text' id = 'Release' placeholder = 'Release Date' value = {releaseDate} onChange={(event) => setReleaseDate(event.target.value)}/>
        </div>
        <div>
            <label htmlFor = 'Genre'>Genre</label>
            <input type = 'text' id = 'Genre' placeholder = 'Genre' value = {songGenre} onChange={(event) => setGenre(event.target.value)}/>
        </div>
        <button type = 'submit'>Submit</button> 
    </form>
    );
}
 
export default CreateSong;