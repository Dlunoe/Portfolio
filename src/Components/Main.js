import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom';
import Home from '../Components/Home';
import Contact from '../Components/Contact';
import Projects from '../Components/Projects';

function Main(){
    return(
        <main>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/contact" component={Contact}/>
                <Route path='/projects' component={Projects}/>
            </Switch>
        </main>
    )
}

export default Main;