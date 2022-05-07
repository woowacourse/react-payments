import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import { CardsContext } from '../../store/cards';
import Card from '../card/Card';

function CardList() {
  const { cards } = useContext(CardsContext);

  return (
    <div className="flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">보유 카드</h2>
      </div>
      {cards.map((card) => (
        <>
          <Card key={uuid()} card={card} />
          <span className="card-nickname">법인카드</span>
        </>
      ))}
      <div className="card-box">
        <Link to="/react-payments/add">
          <div className="empty-card">+</div>
        </Link>
      </div>
    </div>
  );
}

CardList.propTypes = {};
export default CardList;
