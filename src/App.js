import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import LearningPaths from './components/pages/Learning-Paths';
import Articles from './components/pages/Articles';
import Games from './components/pages/Games';

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = { apiResponse: '' }
  }

  callAPI() 
  {
    fetch('http://localhost:9000/testAPI')
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() 
  {
    this.callAPI();
  }
  
  render(){
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learning-paths" element={<LearningPaths />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/games" element={<Games />} />
      </Routes>
      <p className="App-intro">;{this.state.apiResponse}</p>
    </Router>
    </div>
  );
}
}

export default App;
