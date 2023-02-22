import React, {Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import LearningPaths from './components/pages/Learning-Paths';
import Articles from './components/pages/Articles';
import Games from './components/pages/Games';
import WordSearchPage from './components/pages/WordSearchPage';

class App extends Component {

  callAPI() 
  {
    fetch('http://localhost:5007/demo')
        .then(res => res.json())
        .then(res => this.setState({ apiResponse: res }));
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
        <Route path="/wordsearchpage" element={<WordSearchPage />} />
      </Routes>
    </Router>
    </div>
  );
}
}

export default App;
