import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TweetAnalyzer from './pages/TweetAnalyzer';
import RAGChatBot from './pages/RAGChatBot';
import Ascraa from './pages/Ascraa';
import BrokerVerse from './pages/BrokerVerse';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TweetAnalyzer" element={<TweetAnalyzer />} />
        <Route path="/RAGChatBot" element={<RAGChatBot />} />
        <Route path="/Ascraa" element={<Ascraa />} />
        <Route path="/BrokerVerse" element={<BrokerVerse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;