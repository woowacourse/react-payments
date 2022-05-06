import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { uid } from 'react-uid';
import { CardContext } from '../../context';

function CardList({ children }) {
  const { cardList } = useContext(CardContext);

  return (
    <main className="card-list-box">
      {Object.keys(cardList).map(keys => (
        <React.Fragment key={`${uid(keys)}Frag`}>
          <Card key={uid(keys)} cardInformation={cardList[keys]} cardBoxSize={'small'} />
          <p key={`${uid(keys)}Name`} className="card-bottom__number">
            {cardList[keys].cardDesignation}
          </p>
        </React.Fragment>
      ))}
      {children}
    </main>
  );
}

CardList.propTypes = {
  children: PropTypes.node,
};

export default CardList;
