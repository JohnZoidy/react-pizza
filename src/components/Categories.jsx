/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

const Categories = () => {
  const [active, setActive] = React.useState(0);
  return (
    <div className="categories">
      <ul>
        <li className={active === 0 ? 'active' : ''} onClick={() => setActive(0)}>Все</li>
        <li className={active === 1 ? 'active' : ''} onClick={() => setActive(1)}>Мясные</li>
        <li className={active === 2 ? 'active' : ''} onClick={() => setActive(2)}>Вегетарианская</li>
        <li className={active === 3 ? 'active' : ''} onClick={() => setActive(3)}>Гриль</li>
        <li className={active === 4 ? 'active' : ''} onClick={() => setActive(4)}>Острые</li>
        <li className={active === 5 ? 'active' : ''} onClick={() => setActive(5)}>Закрытые</li>
      </ul>
    </div>
  );
};

export default Categories;
