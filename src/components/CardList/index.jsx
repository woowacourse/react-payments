import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import { uid } from 'react-uid';
import { CardContext } from '../../context';

function CardList({ children }) {
  const { cardList } = useContext(CardContext);

  return (
    <main className="card-list-box">
      {Object.keys(cardList).map(keys => (
        <>
          <Card key={uid(keys)} cardInformation={cardList[keys]} cardBoxSize={'small'} />
          <p className="card-bottom__number">{cardList[keys].cardDesignation}</p>
        </>
      ))}
      {children}
    </main>
  );
}

CardList.propTypes = {
  children: PropTypes.node,
};

export default CardList;
