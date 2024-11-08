import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from './components/profilepage';
import GitHubProjectsPage from './components/GithubProjectsPage'; 
import FigmaworksPage from './components/FigmaworksPage';
import EducationPage from './components/EducationPage';
import './App.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/github-projects" element={<GitHubProjectsPage />} />
          <Route path="/FigmaworksPage" element={<FigmaworksPage />} />
          <Route path='EducationPage' element={<EducationPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
