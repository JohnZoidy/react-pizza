/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../slices';
import { setSort } from '../slices/filtersSlice';

type SortItem = {
  name: string;
  type: string;
};

type PopupClick = MouseEvent & {
  path: Node[];
}

const Sort: React.FC = () => {
  const sortRef = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  const sort = useSelector((state: RootState) => state.filters.sort);
  const list: SortItem[] = [
    { name: 'популярности (вверх)', type: 'rating&order=desc' },
    { name: 'популярности (вниз)', type: 'rating&order=asc' },
    { name: 'цене (самые дорогие)', type: 'price&order=desc' },
    { name: 'цене (самые дешевые)', type: 'price&order=asc' },
    { name: 'алфавиту (А-Я)', type: 'title&order=asc' },
    { name: 'алфавиту (Я-А)', type: 'title&order=desc' },
  ];
  const pickSort = (obj: SortItem) => {
    dispatch(setSort(obj));
    setIsVisible(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const _e = e as PopupClick;
      if (sortRef.current && !_e.composedPath().includes(sortRef.current)) {
        setIsVisible(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setIsVisible(!isVisible)}>{sort.name}</span>
      </div>
      {isVisible && (
      <div className="sort__popup">
        <ul>
          {list.map((item, i) => <li key={i} className={sort.name === item.name ? 'active' : ''} onClick={() => pickSort(item)}>{item.name}</li>)}
        </ul>
      </div>
      )}
    </div>
  );
};

export default Sort;
