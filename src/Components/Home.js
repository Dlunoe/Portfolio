import React, {Component} from 'react';
import {ProgressBar} from 'react-mdl';
import '../Components/Styles/skills.css';
import '../Components/Styles/resume.css';
import '../App.css';



class Home extends Component{
render(){
    return(
        <div class="homeContainer">
            <div class="about">
                <h1>Dustin Lunoe</h1>
                <h3 className="brand">Software developer who uses his experience and skills in managing people and customer experience.
                 As a developer I have a knack for problem solving,
                 while also maintaining a perspective of the end-user experience</h3>
            </div>
            <div class="skills">
                <p class="firstTag">Javascript</p>
                <ProgressBar progress={80} className="firstRow"/>
                <p class="secondTag">html/css</p>
                <ProgressBar progress={70} className="secondRow"/>
                <p class="thirdTag">React</p>
                <ProgressBar progress={90} className="thirdRow"/>
                <p class="fourthTag">Ruby</p>
                <ProgressBar progress={60} className="fourthRow"/>
            </div>
            <div class="backend">
                <p class="firstTag">MongoDB</p>
                <ProgressBar progress={80} className="firstRow"/>
                <p class="secondTag">Express</p>
                <ProgressBar progress={75} className="secondRow"/>
                <p class="thirdTag">Rails</p>
                <ProgressBar progress={50} className="thirdRow"/>
            </div>
            <div  class="resume">
                <h3>Other skills</h3>
                <ul class="otherSkills">
                    <li>Customer-facing experience</li>
                    <li>customer-satisfaction experience</li>
                    <li>can work in fast paced workplaces</li>
                    <li>work in a close team of coworkers</li>
                    <li>experience in managing teams of up to 8 people</li>
                </ul>
            </div>
        </div>
        
    )
}
}

export default Home;