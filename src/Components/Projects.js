import React from 'react'
import '../App.css'

function Projects(){
    return(
        <div className="projects">
            <p>this is Projects</p>
            <ul class="projectList">
                <li>
                    <a target="_blank" href="https://safe-citadel-26643.herokuapp.com/" 
                    class="diaries">
                        <button class="diariesButton">Diaries</button>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://reviews-app-client.herokuapp.com/" 
                    class="reviews">
                        <button class="reviewsButton">Reviews</button>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Projects;