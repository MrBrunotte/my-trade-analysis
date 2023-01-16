import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';

const App = () =>
  <div className='container'>
    <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/blog/:id' element={<Blog />} />
    </Routes>
  </div>

export default App;
