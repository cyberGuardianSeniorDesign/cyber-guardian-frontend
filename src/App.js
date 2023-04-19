import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home.jsx';
import LearningPaths from './components/pages/Learning-Paths.jsx';
import Articles from './components/pages/Articles.jsx';
import Games from './components/pages/Games.jsx';
import WordSearch from './components/pages/WordSearch.jsx';
import Checklists from './components/pages/Checklists.jsx';
import axios from 'axios';
import ViewArticle from './components/pages/ViewArticle.jsx';
import ViewChecklist from './components/pages/ViewChecklist.jsx';
import CrosswordPage from './components/pages/CrosswordPage.jsx';
import GoPhishPage from './components/pages/GoPhishPage.jsx';
import ViewLearningPath from './components/pages/ViewLearningPath.jsx';


//test pipeline
function App(){
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learning-paths" element={<LearningPaths />} />
        <Route path="/learning-paths/:id" element={<ViewLearningPath />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ViewArticle />} />
        <Route path="/games" element={<Games />} />
        <Route path="/checklists" element={<Checklists />} />
        <Route path="/checklists/:id" element={<ViewChecklist />} />
        <Route path="/games/word-search" element={<WordSearch />} />
        <Route path="/games/crossword-puzzle" element={<CrosswordPage />} />
        <Route path="/games/go-phish" element={<GoPhishPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

