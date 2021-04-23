import React from 'react';
import * as Style from './style';

const CardNumbersInput = (props) => {
  return (
    <>
      <Style.Input type="number" width="44px" />
      <Style.Divider>-</Style.Divider>
      <Style.Input type="number" width="44px" />
      <Style.Divider>-</Style.Divider>
      <Style.Input type="password" width="44px" />
      <Style.Divider>-</Style.Divider>
      <Style.Input type="password" width="44px" />
    </>
  );
};

export default CardNumbersInput;
