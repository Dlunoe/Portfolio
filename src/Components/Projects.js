import React from 'react'
import '../App.css'

function Projects(){
    return(
        <div className="projects">
            <p class="projectHead">These are my currently live projects.</p>
            <ul class="projectList">
                <li class="diaries">
                    <a target="_blank" href="https://safe-citadel-26643.herokuapp.com/" 
                    class="diaries">
                        <button class="diariesButton">Diaries</button>
                    </a>
                </li>
                <li class="reviews">
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