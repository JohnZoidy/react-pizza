/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Pizza from '../../components/Pizza.jsx';
import PizzaLoader from '../../components/loaders/Pizza.jsx';
import Sort from '../../components/Sort.jsx';
import Categories from '../../components/Categories.jsx';

const Home = () => {
  const [items, setItems] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setIsLoading(true);
    fetch('https://626d16545267c14d5677d9c2.mockapi.io/items')
      .then((res) => res.json())
      .then((res) => setItems(res))
      .then(() => setIsLoading(false));
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [1, 2, 3, 4, 5, 6].map((item) => <PizzaLoader key={item} />)
          : items.map((item) => <Pizza key={item.id} {...item} />)}
      </div>
    </>
  );
};

export default Home;
