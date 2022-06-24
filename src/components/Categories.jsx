/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

const Categories = ({ category, setCategory }) => (
  <div className="categories">
    <ul>
      <li className={category === 0 ? 'active' : ''} onClick={() => setCategory(0)}>Все</li>
      <li className={category === 1 ? 'active' : ''} onClick={() => setCategory(1)}>Мясные</li>
      <li className={category === 2 ? 'active' : ''} onClick={() => setCategory(2)}>Вегетарианская</li>
      <li className={category === 3 ? 'active' : ''} onClick={() => setCategory(3)}>Гриль</li>
      <li className={category === 4 ? 'active' : ''} onClick={() => setCategory(4)}>Острые</li>
      <li className={category === 5 ? 'active' : ''} onClick={() => setCategory(5)}>Закрытые</li>
    </ul>
  </div>
);

export default Categories;
