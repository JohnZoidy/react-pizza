/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './Header.jsx';
import Home from '../pages/Home/index.jsx';
import NotFound from '../pages/NotFound/index.jsx';
import Cart from '../pages/Cart/index.jsx';
import SearchProvider from '../contexts/SearchContext.jsx';

const App = () => (
  <div className="wrapper">
    <SearchProvider>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </SearchProvider>
  </div>
);

export default App;
