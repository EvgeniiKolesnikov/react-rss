import React from 'react';
import { AboutUs, Home, Page404 } from 'pages';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
