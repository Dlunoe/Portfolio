import React from 'react';
import './App.css';
import Header from './Components/Header'
import Main from './Components/Main'

import {Route, Switch, Redirect} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Header/>
     <Main/>
    </div>
  );
}

export default App;