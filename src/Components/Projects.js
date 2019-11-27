import React, {Component} from 'react'
import '../Components/Styles/projects.css'
import '../App.css'

class Projects extends Component{
    componentDidMount=()=> {
        fetch('https://safe-citadel-26643.herokuapp.com/', {mode: 'no-cors'})
        .then(res=>console.log('woke up diaries'));

        fetch('https://reviews-app-client.herokuapp.com/', {mode: 'no-cors'})
        .then(res=>console.log('woke up reviews'));
    }
    render(){
        return(
            <div className="projects">
                <ul class="projectList">
                <li class="listItem">
                        <a target="_blank" href="https://dustins-poke-api.herokuapp.com/" 
                        class="diaries">
                            <button class="diariesButton">Poké-API</button>
                        </a>
                        <a class="gitLink" href="https://github.com/Dlunoe/PokeAPI">GitHub</a>
                    </li>
                    <li class="listItem">
                        <a target="_blank" href="https://safe-citadel-26643.herokuapp.com/" 
                        class="diaries">
                            <button class="diariesButton">Diaries</button>
                        </a>
                        <a class="gitLink" href="https://github.com/Dlunoe/Project-Reviews">GitHub</a>
                    </li>
                    <li class="listItem">
                        <a target="_blank" href="https://reviews-app-client.herokuapp.com/" 
                        class="reviews">
                            <button class="reviewsButton">Reviews</button>
                        </a>
                        <a class="gitLink" href="https://github.com/Dlunoe/ProjectGamereviews">GitHub</a>
                    </li>
                </ul>
            </div>
        )
    }
    
}

export default Projects;