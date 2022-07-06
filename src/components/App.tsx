/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './Header';
import Home from '../pages/Home/index';
import NotFound from '../pages/NotFound/index';
import Cart from '../pages/Cart/index';
import PizzaInfo from './PizzaInfo';

const App: React.FC = () => (
  <div className="wrapper">
    <Header />
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<PizzaInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </div>
);

export default App;
