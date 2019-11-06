import React from 'react'
import '../Components/Styles/projects.css'
import '../App.css'

function Projects(){
    return(
        <div className="projects">
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