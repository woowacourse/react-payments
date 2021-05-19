import React from 'react';
import Card from '../../components/Card/Card';
import PropTypes from 'prop-types';
import { KEY, PAGE } from '../../utils/constant';

const CardListPage = (props) => {
  const { setPageRouter } = props;

  const cards = JSON.parse(localStorage.getItem(KEY.CARDS)) ?? [];

  const handlePageRouter = () => {
    setPageRouter(PAGE.ADD);
  };

  return (
    <div className="p-5">
      <h1 className="ml-1 text-xl">보유카드</h1>
      <ul className="flex flex-col items-center mt-10">
        {cards.map((card, index) => (
          <li key={index} className="mt-5">
            <Card
              size="small"
              cardNumbers={card.cardNumbers}
              cardCompany={card.cardCompany}
              expiration={card.expiration.month + '/' + card.expiration.year}
            />
            <h2 className="mt-2 text-center">{card.cardName}</h2>
          </li>
        ))}

        <li className="mt-5">
          <div className="flex items-center justify-center w-208 h-130 bg-gray-350 rounded-xl">
            <button className="text-4xl" onClick={handlePageRouter}>
              +
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CardListPage;

CardListPage.propTypes = {
  setPageRouter: PropTypes.func.isRequired,
};
