import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import IndexPage from './pages/index';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AppHome from './pages/app/app_home';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <Router>
  <Routes>
    <Route path="/" element={<IndexPage />} />
    <Route path="/app" element={<AppHome/>} />
  </Routes>
</Router>
  </React.StrictMode>
);

reportWebVitals();