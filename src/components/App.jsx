import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './Header.jsx';
import Home from '../pages/Home/index.jsx';
import NotFound from '../pages/NotFound/index.jsx';
import Cart from '../pages/Cart/index.jsx';

const App = () => (
  <div className="wrapper">
    <Header />
    <div className="content">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  </div>
);

export default App;
