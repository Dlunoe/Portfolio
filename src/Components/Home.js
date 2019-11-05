import React, {Component} from 'react';
import {ProgressBar} from 'react-mdl';

import '../App.css';
import BackSkills from './BackSkills'

class Home extends Component{
render(){
    return(
        <div>
            <div>
                <h1>Dustin Lunoe</h1>
                <h3 class="brand">Software developer who uses his experience and skills in managing people and customer experience.
                 As a developer I have a knack for problem solving,
                 while also maintaining a perspective of the end-user experience</h3>
            </div>
            <div>
                <ProgressBar progress={50} />
            </div>
        </div>
        
    )
}
}

export default Home;