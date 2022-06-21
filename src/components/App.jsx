/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Pizza from './Pizza.jsx';
import Header from './Header.jsx';
import Sort from './Sort.jsx';
import Categories from './Categories.jsx';

const App = () => {
  const [items, setItems] = React.useState('');
  React.useEffect(() => {
    fetch('https://626d16545267c14d5677d9c2.mockapi.io/items')
      .then((res) => res.json())
      .then((res) => setItems(res));
  }, []);

  return (
    items
    && (
    <div className="wrapper">
      {console.log(items)}
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((item) => <Pizza key={item.id} {...item} />)}
          </div>
        </div>
      </div>
    </div>
    )
  );
};

export default App;
