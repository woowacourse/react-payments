import React from 'react';
import * as Style from './style';

const CardColorOption = (props) => {
  return (
    <Style.Root>
      <Style.Circle color={props.color} />
      <Style.BankName>{props.bankName}</Style.BankName>
    </Style.Root>
  );
};

export default CardColorOption;
