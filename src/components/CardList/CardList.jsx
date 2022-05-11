import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { uid } from 'react-uid';
import { CardContext } from '../../context';
import { CARD_SIZE } from '../../constants';

function CardList({ children }) {
  const { cardList } = useContext(CardContext);

  return (
    <main className="card-list-box">
      {Object.keys(cardList).map(keys => (
        <React.Fragment key={`${uid(keys)}Frag`}>
          <Card key={uid(keys)} cardInformation={cardList[keys]} cardBoxSize={CARD_SIZE.SMALL} />
          <p key={`${uid(keys)}Name`} className="card-bottom__number">
            {cardList[keys].cardNickName}
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
