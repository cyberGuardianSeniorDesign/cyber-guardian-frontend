import React, {Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home.jsx';
import LearningPaths from './components/pages/Learning-Paths.jsx';
import Articles from './components/pages/Articles.jsx';
import Games from './components/pages/Games.jsx';
//import WordSearchPage from './components/pages/WordSearchPage.jsx';
import axios from 'axios';
import Checklists from './components/pages/Checklists.jsx';

function App(){

  React.useEffect(() => {
    const callApi = async() => {
      await axios.get('http://localhost:5007/articles')
      .then(res => console.log(res))
    }

    callApi()
  })

  React.useEffect(() => {
    const callApi = async() => {
      await axios.get('http://localhost:5007/learning-paths')
      .then(res => console.log(res))
    }

    callApi()
  })

  React.useEffect(() => {
    const callApi = async() => {
      await axios.get('http://localhost:5007/checklists')
      .then(res => console.log(res))
    }

    callApi()
  })

  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learning-paths" element={<LearningPaths />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/games" element={<Games />} />
        <Route path="/checklists" element={<Checklists />} />
        {/* <Route path="/wordsearchpage" element={<WordSearchPage />} /> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
