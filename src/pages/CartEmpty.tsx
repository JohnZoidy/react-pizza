import React from 'react';
import { Link } from 'react-router-dom';
import imgPath from '../../assets/img/empty-cart.png';

const CartEmpty: React.FC = () => (
  <div className="container container--cart">
    <div className="cart cart--empty">
      <h2>
        Корзина пуста
      </h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={imgPath} alt="Empty cart" />
      <Link to="/" className="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </div>
  </div>
);

export default CartEmpty;
