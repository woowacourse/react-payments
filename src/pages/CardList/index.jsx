import React from 'react';
import Page from '..';
import PropTypes from 'prop-types';
import { CARD_DEFINITION } from '../../components/types';
import Card from '../../components/card/Card';
import { uid } from 'react-uid';
import { useNavigate } from 'react-router-dom';

function CardList({ cardList }) {
  const navigation = useNavigate();
  const onClickEmptyCardBox = () => {
    navigation('../add', { replace: true });
  };
  return (
    <Page>
      {cardList.map(({ id, alias, ...cardInformation }) => (
        <div key={uid(id)} className="flex-column-center">
          <Card cardInformation={cardInformation} />
          <span className="card-nickname">{alias}</span>
        </div>
      ))}
      <div className="card-box clickable-box" onClick={onClickEmptyCardBox}>
        <div className="empty-card">+</div>
      </div>
    </Page>
  );
}

CardList.propTypes = {
  cardList: PropTypes.arrayOf(CARD_DEFINITION),
};

export default CardList;
