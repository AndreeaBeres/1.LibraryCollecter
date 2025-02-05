import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ActionAdventure from './pages/ActionAdventure';
import Fantasy from './pages/Fantasy';
import Horror from './pages/Horror';
import Mystery from './pages/Mystery';
import Romance from './pages/Romance';
import Fiction from './pages/Fiction';
import ThrillerSuspense from './pages/ThrillerSuspense';
import './Home.css';
import './ActionAdventure.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/action-adventure" element={<ActionAdventure />} />
        <Route path="/fantasy" element={<Fantasy />} />
        <Route path="/horror" element={<Horror />} />
        <Route path="/mystery" element={<Mystery />} />
        <Route path="/romance" element={<Romance />} />
        <Route path="/fiction" element={<Fiction />} />
        <Route path="/thriller-suspense" element={<ThrillerSuspense />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

