/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useSelector, useDispatch } from 'react-redux';
import { uniqueId } from 'lodash';
import React from 'react';
import { addItem } from '../slices/cartSlice.js';

const typesNames = ['тонкое', 'традиционное'];

const Pizza = ({
  id, imageUrl, title, types, sizes, price,
}) => {
  const dispatch = useDispatch();
  const [activeSize, setActiveSize] = React.useState(0);
  const [activeType, setActiveType] = React.useState(0);
  const cartItem = useSelector((state) => state.cart.items.find((obj) => obj.id === id));
  const count = cartItem ? cartItem.count : 0;
  const item = {
    id,
    imageUrl,
    title,
    type: typesNames[activeType],
    size: sizes[activeSize],
    price,
    count: 0,
  };

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <img
          className="pizza-block__image"
          src={imageUrl}
          alt="Pizza"
        />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((obj, i) => <li key={uniqueId()} className={activeType === i ? 'active' : ''} onClick={() => setActiveType(i)}>{typesNames[obj]}</li>)}
          </ul>
          <ul>
            {sizes.map((obj, i) => <li key={uniqueId()} className={activeSize === i ? 'active' : ''} onClick={() => setActiveSize(i)}>{`${obj} см.`}</li>)}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">{`от ${price} ₽`}</div>
          <div onClick={() => dispatch(addItem(item))} className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {count > 0 && <i>{count}</i>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
