import React from 'react';
import { AboutUs, Home, Page404 } from 'pages';
import { BrowserRouter } from 'react-router-dom';
import { Navigate, Route, Routes } from 'react-router';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/" element={<Home />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
