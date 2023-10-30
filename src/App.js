import logo from './logo-Meta.png';
import './App.css';
import signUp from './component/signup';
import React, {Component} from "react";


 

class App extends Component{


  state = {

  }

  render(){

    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo-pulse" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );}
}

export default App;
