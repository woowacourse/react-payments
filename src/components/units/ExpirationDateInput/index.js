import React from 'react';
import * as Style from './style';

const ExpirationDateInput = (props) => {
  return (
    <>
      <Style.Input type="number" width="28px" placeholder="MM" />
      <Style.Divider>/</Style.Divider>
      <Style.Input type="number" width="28px" placeholder="YY" />
    </>
  );
};

export default ExpirationDateInput;
