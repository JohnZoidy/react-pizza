/* eslint-disable react/jsx-no-constructed-context-values */
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './Header';
import Home from '../pages/Home/index';

const App: React.FC = () => {

  const Cart = React.lazy(() => import('../pages/Cart/index'));
  const NotFound = React.lazy(() => import('../pages/NotFound/index'));
  const PizzaInfo = React.lazy(() => import('./PizzaInfo'));

  return (
  <div className="wrapper">
    <Header />
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Suspense fallback={<div>Идет загрузка...</div>}><Cart /></Suspense>} />
        <Route path="/pizza/:id" element={<Suspense fallback={<div>Идет загрузка...</div>}><PizzaInfo /></Suspense>} />
        <Route path="*" element={<Suspense fallback={<div>Идет загрузка...</div>}><NotFound /></Suspense>} />
      </Routes>
    </div>
  </div>
)};

export default App;
