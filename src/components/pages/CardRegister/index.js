import React, { useState } from 'react';
import Card from '../../shared/Card';
import CardRegisterForm from '../../units/CardRegisterForm';
import CardSelector from '../../units/CardSelector';
import Button from '../../shared/Button';
import PALETTE from '../../../styles/palette';
import * as Style from './style';

const CardRegister = (props) => {
  const [isSelectorOpened, setSelectorOpened] = useState(false);

  return (
    <>
      <Style.Root>
        <Style.CardWrapper>
          <Card width="213px" height="133px" backgroundColor={PALETTE.EMPTY_CARD_GRAY} isFilled={false} />
        </Style.CardWrapper>
        <CardRegisterForm />
        <Button text={'다음'} />
      </Style.Root>
      {isSelectorOpened && <CardSelector />}
    </>
  );
};

export default CardRegister;
