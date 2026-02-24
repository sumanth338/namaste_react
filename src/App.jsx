import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import RestaurantMenu from './components/RestaurantMenu';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurant/:id" element={<RestaurantMenu />} />
    </Routes>
  );
};

export default App;
