import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import '../App.css'

function Header(props){
    

    return(
        <header>
            <nav class='navStyles'>
                <ul class='ulStyles'>
                    <li class='aStyles'><Link to="/" ><button class="buttonStyles">Home</button></Link></li>
                    <li class='aStyles'><Link to="/contact" ><button class="buttonStyles">Contact Me</button></Link></li>
                    <li class='aStyles'><Link to="/projects" ><button class="buttonStyles">My Projects</button></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;