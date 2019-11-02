import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import '../App.css'

function Header(props){
    

    return(
        <header>
            <nav class='navStyles'>
                <ul class='ulStyles'>
                    <li><Link to="/" class='aStyles'>Home</Link></li>
                    <li><Link to="/contact" class='aStyles'>Contact Me</Link></li>
                    <li><Link to="/projects" class='aStyles'>My Projects</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;