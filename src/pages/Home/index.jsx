/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import axios from 'axios';
import qs from 'qs';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';

import Pizza from '../../components/Pizza.jsx';
import PizzaLoader from '../../components/loaders/Pizza.jsx';
import Sort from '../../components/Sort.jsx';
import Categories from '../../components/Categories.jsx';
import Pagination from '../../components/Pagination.jsx';
import { SearchContext } from '../../contexts/SearchContext.jsx';
import { setFilters } from '../../slices/filtersSlice.js';

const Home = () => {
  const location = useLocation();
  const [, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { sort, categoryId, currentPage } = useSelector((state) => state.filters);
  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState('');
  const isFirstRender = React.useRef(false);
  const isMounted = React.useRef(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const pageCount = 3; // it must be from backend

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (isMounted.current) {
      const queryString = qs.stringify({
        categoryId,
        sort: sort.type,
        currentPage,
      });

      setSearchParams(queryString, { replace: true });
    }
    isMounted.current = true;
  }, [categoryId, sort, searchValue, currentPage]);

  React.useEffect(() => {
    if (location.search) {
      const params = qs.parse(location.search.substring(1));
      dispatch(setFilters({
        ...params,
        sort,
      }));
      isFirstRender.current = true;
    }
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!isFirstRender.current) {
      setIsLoading(true);
      axios
        .get(`https://626d16545267c14d5677d9c2.mockapi.io/items?page=${currentPage}&limit=4&${categoryId === 0 ? '' : `category=${categoryId}&`}sortBy=${sort.type}${searchValue === '' ? '' : `&search=${searchValue}`}`)
        .then((res) => {
          setItems(res.data);
          setIsLoading(false);
        });
    }
    isFirstRender.current = false;
  }, [categoryId, sort, searchValue, currentPage]);

  return (
    <div className="container">
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
      <Pagination pageCount={pageCount} />
    </div>
  );
};

export default Home;
