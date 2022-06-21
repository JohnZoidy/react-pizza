/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Pizza from './Pizza.jsx';
import Header from './Header.jsx';
import Sort from './Sort.jsx';
import Categories from './Categories.jsx';
import db from './db.json';

const App = () => {
  const { pizzas } = db;

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((item) => <Pizza key={item.id} {...item} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
