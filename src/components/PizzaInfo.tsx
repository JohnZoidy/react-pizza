import React from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import routes from '../routes';

const PizzaInfo: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchPizza = async () => {
      try {
        const { data } = await axios.get(`https://626d16545267c14d5677d9c2.mockapi.io/items/${id}`);
        setPizza(data);
      } catch (error) {
        alert('Ошибка при получении пиццы!');
        navigate('/');
      }
    };

    fetchPizza();
  }, []);

  if (!pizza) {
    return <>Загрузка...</>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt={pizza.title} />
      <h2>{pizza.title}</h2>
      <h4>
        {pizza.price}
        {' '}
        ₽
      </h4>
      <Link to={routes.mainPage()}>
        <button type="button" className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default PizzaInfo;
