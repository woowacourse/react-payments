import React from 'react';
import PropTypes from 'prop-types';
import { dummyBanks } from '../../../mockData.js';
import PALETTE from '../../../styles/palette';
import * as Style from './style';

const CardColorOption = (props) => {
  const { onClickOption, bankId } = props;

  const bank = dummyBanks.find(({ id }) => id === bankId);
  const bankName = bank?.name || '';
  const cardColor = bank?.color || PALETTE.EMPTY_CARD_GRAY;

  return (
    <Style.Root>
      <Style.Circle color={cardColor} data-bank-id={bankId} onClick={onClickOption} />
      <Style.BankName>{bankName}</Style.BankName>
    </Style.Root>
  );
};

CardColorOption.propTypes = {
  onClickOption: PropTypes.func.isRequired,
  bankId: PropTypes.string.isRequired,
};

export default CardColorOption;
