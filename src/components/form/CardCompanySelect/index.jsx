import React from 'react';
import { uid } from 'react-uid';
import PropTypes from 'prop-types';
import { CARD_TYPE } from '../../../utils/constants';

function CardCompanySelect({ closeModal, cardInputDispatch }) {
  const onClickOption = cardType => {
    closeModal();
    cardInputDispatch({ type: 'CHANGE_CARD_COMPANY', payload: { cardType } });
  };
  return (
    <div className="flex-center">
      {Object.entries(CARD_TYPE).map(([cardType, { name, color }]) => (
        <div
          key={uid(name)}
          className="modal-item-container"
          onClick={() => onClickOption(cardType)}
        >
          <div className="modal-item-dot" style={{ backgroundColor: color }} />
          <span className="modal-item-name">{name}</span>
        </div>
      ))}
    </div>
  );
}

CardCompanySelect.propTypes = {
  closeModal: PropTypes.func,
  cardInputDispatch: PropTypes.func,
};

export default CardCompanySelect;
