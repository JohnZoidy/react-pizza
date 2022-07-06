import React from 'react';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';

import { setSearchValue } from '../slices/filtersSlice.js';

const Search:React.FC = () => {
  const dispatch = useDispatch();
  const [localSearch, setLocalSearch] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);
  const setSearchClear = () => {
    dispatch(setSearchValue(''));
    setLocalSearch('');
    inputRef.current?.focus();
  };
  const updateSearchValue = React.useCallback(
    debounce((str) => dispatch(setSearchValue(str)), 500),
    [],
  );
  const onChangeInput = (e: any) => {
    setLocalSearch(e.target.value);
    updateSearchValue(e.target.value);
  };

  return (
    <div className="root">
      <svg
        className="icon"
        width="24"
        height="24"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
          fill="#2C2C2C"
        />
      </svg>
      <input
        ref={inputRef}
        className="input"
        value={localSearch}
        placeholder="Поиск пиццы..."
        type="text"
        onChange={onChangeInput}
      />
      {localSearch
    && (
    <svg onClick={setSearchClear} className="clearIcon" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
      <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
      <path d="M0 0h48v48h-48z" fill="none" />
    </svg>
    )}
    </div>
  );
};

export default Search;
