import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import UploadPage from './pages/Upload/Upload';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <Nav />
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/video/:id" element={<Main />} />
        </Routes>
      </main> 
    </BrowserRouter>
  );
}

export default App;
