/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../slices';
import { setCategoryId } from '../slices/filtersSlice';

const Categories: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const category = useSelector((state: RootState) => state.filters.categoryId);
  const setCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };
  return (
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
});

export default Categories;
