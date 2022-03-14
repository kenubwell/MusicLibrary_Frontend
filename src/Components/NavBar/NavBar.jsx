import React from "react";
import './NavBar.css';
import {FaReact} from 'react-icons/fa';
import {SiDjango, SiMysql} from 'react-icons/si';

const NavBar = () => {
    return (  
    <div className ="nav-background">
        <nav>
            <li className = "navbar-list"><h7 className = "powered-by">Powered By:</h7></li>
            <li className = "navbar-list"><a href="https://reactjs.org/" target="_blank"><FaReact color = 'darkturquoise' size = '2.5rem'/></a></li>
            <li className = "navbar-list"><a href="https://www.djangoproject.com/" target="_blank"><SiDjango color = 'white' size = '2rem'/></a></li>
            <li className = "navbar-list"><a href="https://www.mysql.com/" target="_blank"><SiMysql color = 'white' size = '3rem'/></a></li>
        </nav>
        <div>
            <h1 className = 'musiclib-logo'>Music<small className= 'text-muted'>Library</small></h1>
        </div>
        <div>
            <a href="https://devcodecamp.com/" target="_blank"><img src ="/images/devCodeCamp-Logo-12W.jpeg" className = "navbar-image" alt = "devCodeCamp Logo"/></a>
        </div>
    </div>
    );
}
 
export default NavBar;