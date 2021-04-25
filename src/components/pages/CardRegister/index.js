import React from 'react';
import Card from '../../shared/Card';
import CardRegisterForm from '../../units/CardRegisterForm';
import PALETTE from '../../../styles/palette';
import * as Style from './style';

const CardRegister = (props) => {
  return (
    <Style.Root>
      <Style.CardWrapper>
        <Card width="213px" height="133px" backgroundColor={PALETTE.EMPTY_CARD_GRAY} isFilled={false} />
      </Style.CardWrapper>
      <CardRegisterForm />
    </Style.Root>
  );
};

export default CardRegister;
