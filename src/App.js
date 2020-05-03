import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import '../src/assets/css/App.css';
import Navbar from './common/layout/Navbar';
import Routing from './common/router/Router';

class App extends React.Component {
  render(){
    return (
      <div>
        <Navbar/>
        <Routing/>
      </div>
    );
  }
  
}

export default App;
