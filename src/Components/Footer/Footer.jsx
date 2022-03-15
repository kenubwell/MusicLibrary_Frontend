import React from "react";
import "./Footer.css";
import {BsGithub} from 'react-icons/bs';

function Footer() {
  return (
    <div className="song-footer">
        <div className="copy-right">
            <medium className='copy-color'>&copy;{new Date().getFullYear()} Ken's Music Library</medium> | All Rights Reserved | Open-Source
        </div>
        <nav>
            <li className = "footer-list"><a href="https://github.com/kenubwell/MusicLibrary_Frontend" className = "footer-ref" target="_blank">My GitHub Repo</a></li>
            <li className = "footer-list"><a href="https://github.com/" target="_blank" className="footer-ref"><BsGithub color = 'white' size = '2rem'/></a></li>
        </nav>
    </div>

  );
}

export default Footer;