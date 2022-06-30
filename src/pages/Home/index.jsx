/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Pizza from '../../components/Pizza.jsx';
import PizzaLoader from '../../components/loaders/Pizza.jsx';
import Sort from '../../components/Sort.jsx';
import Categories from '../../components/Categories.jsx';

const Home = ({ searchValue }) => {
  const [items, setItems] = React.useState('');
  const [category, setCategory] = React.useState(0);
  const [order, setOreder] = React.useState({ name: 'популярности (вверх)', type: 'rating&order=desc' });
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);
    fetch(`https://626d16545267c14d5677d9c2.mockapi.io/items?${category === 0 ? '' : `category=${category}&`}sortBy=${order.type}${searchValue === '' ? '' : `&search=${searchValue}`}`)
      .then((res) => res.json())
      .then((res) => setItems(res))
      .then(() => setIsLoading(false));
    window.scrollTo(0, 0);
  }, [order, category, searchValue]);
  return (
    <div className="container">
      <div className="content__top">
        <Categories category={category} setCategory={setCategory} />
        <Sort order={order} setOrder={setOreder} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [1, 2, 3, 4, 5, 6].map((item) => <PizzaLoader key={item} />)
          : items.map((item) => <Pizza key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default Home;
