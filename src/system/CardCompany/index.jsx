import React from 'react';

import Circle from '../../components/Circle';
import { CardCompanyStyled, CardCompanyNameStyled } from './style';


const CardCompany = ({ color, selected, children, onClick }) => {
  return (
    <CardCompanyStyled onClick={onClick}>
      <Circle size='37px' color={color} />
      <CardCompanyNameStyled selected={selected}>{children}</CardCompanyNameStyled>
    </CardCompanyStyled>
  );
}

export default CardCompany;
