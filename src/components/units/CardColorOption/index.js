import React from 'react';
import PropTypes from 'prop-types';
import * as Style from './style';

const CardColorOption = (props) => {
  const { onClickOption, bankId } = props;

  return (
    <Style.Root>
      <Style.Circle color={props.color} data-bank-id={bankId} onClick={onClickOption} />
      <Style.BankName>{props.bankName}</Style.BankName>
    </Style.Root>
  );
};

export default CardColorOption;

CardColorOption.propTypes = {
  onClickOption: PropTypes.func.isRequired,
  bankId: PropTypes.string.isRequired,
};
