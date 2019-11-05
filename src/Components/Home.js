import React, {Component} from 'react';
import {ProgressBar} from 'react-mdl';
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
                <p class="javascriptTag">Javascript</p>
                <ProgressBar progress={50} className="javascript"/>
                <p class="htmlCssTag">html/css</p>
                <ProgressBar progress={50} className="htmlCss"/>
                <p class="reactTag">React</p>
                <ProgressBar progress={50} className="react"/>
                <p class="rubyTag">Ruby</p>
                <ProgressBar progress={50} className="ruby"/>
            </div>
        </div>
        
    )
}
}

export default Home;