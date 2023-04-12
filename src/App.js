import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home.jsx';
import LearningPaths from './components/pages/Learning-Paths.jsx';
import Articles from './components/pages/Articles.jsx';
import Games from './components/pages/Games.jsx';
import WordSearch from './components/pages/WordSearch.jsx';
// import LearnMore from './components/pages/LearnMore.jsx';
import Checklists from './components/pages/Checklists.jsx';
import axios from 'axios';
import ViewArticle from './components/pages/ViewArticle.jsx';
import ViewChecklist from './components/pages/ViewChecklist.jsx';
import CrosswordPage from './components/pages/CrosswordPage.jsx';
import GoPhishPage from './components/pages/GoPhishPage.jsx';


//test pipeline
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
        {/* <Route path="/learn-more" element={<LearnMore />} /> */}
        <Route path="/learning-paths" element={<LearningPaths />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ViewArticle />} />
        <Route path="/games" element={<Games />} />
        <Route path="/checklists" element={<Checklists />} />
        <Route path="/checklists/:id" element={<ViewChecklist />} />
        <Route path="/wordsearch" element={<WordSearch />} />
        <Route path="/crosswordpage" element={<CrosswordPage />} />
        <Route path="/gophishpage" element={<GoPhishPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

