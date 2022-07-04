/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import qs from 'qs';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchPizzas } from '../../slices/pizzasSlice.js';

import Pizza from '../../components/Pizza.jsx';
import PizzaLoader from '../../components/loaders/Pizza.jsx';
import Sort from '../../components/Sort.jsx';
import Categories from '../../components/Categories.jsx';
import Pagination from '../../components/Pagination.jsx';
import { setFilters } from '../../slices/filtersSlice.js';

const Home = () => {
  const location = useLocation();
  const { items, status } = useSelector((state) => state.pizzas);
  const [, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { sort, categoryId, currentPage } = useSelector((state) => state.filters);
  const searchValue = useSelector((state) => state.filters.searchValue);
  const [isFirstRender, setIsFirstRender] = React.useState(false);
  const isMounted = React.useRef(false);
  const pageCount = 3; // it must be from backend
  const getPizzas = async () => {
    dispatch(fetchPizzas({
      sort,
      categoryId,
      currentPage,
      searchValue,
    }));
  };

  const renderContent = (stat) => {
    switch (stat) {
      case 'loading': return [1, 2, 3, 4, 5, 6].map((item) => <PizzaLoader key={item} />);
      case 'success': return items.map((item) => <Pizza key={item.id} {...item} />);
      case 'error': return <div>Произошла ошибка во время загрузки данных. Пожалуйста, обратитесь в службу технической поддержки.</div>;
      default:
        return (
          <div>
            Произошла непредвиденная ошибка. Пожалуйста, обратитесь в службу технической поддержки.
          </div>
        );
    }
  };

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
        sort,
        ...params,
      }));
      setIsFirstRender(true);
    }
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!isFirstRender.current) {
      getPizzas();
    }
    setIsFirstRender(false);
  }, [categoryId, sort, searchValue, currentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {renderContent(status)}
      </div>
      <Pagination pageCount={pageCount} />
    </div>
  );
};

export default Home;
