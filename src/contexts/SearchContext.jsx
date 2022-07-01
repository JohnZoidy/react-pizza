/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
