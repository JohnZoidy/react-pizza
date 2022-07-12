import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';

import style from './NotFound.module.scss';

const NotFound: React.FC = () => (
  <div className={style.root}>
    <h1>
      <span>😕</span>
      <br />
      Ничего не найдено
    </h1>
    <p className={style.description}>
      К сожалению, данная страница не существует.
      {' '}
      <Link to={routes.mainPage()}>Перейти на главную.</Link>
    </p>
  </div>
);

export default NotFound;
