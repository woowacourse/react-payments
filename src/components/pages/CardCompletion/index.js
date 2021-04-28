import React from 'react';
import Card from '../../shared/Card';
import Button from '../../shared/Button';
import { dummyBanks } from '../../../mockData';
import * as Style from './style';

const CardCompletion = (props) => {
  const {
    cardData: { bankId, cardNumbers, expirationDate, ownerName, secureCode, cardPassword },
  } = props;

  const { color: cardColor, name: bankName } = dummyBanks.find(({ id }) => id === bankId);

  return (
    <Style.Root>
      <Style.Title>카드등록이 완료되었습니다.</Style.Title>
      <Style.CardWrapper>
        <Card
          width="293px"
          height="183px"
          size="large"
          backgroundColor={cardColor}
          ownerName={ownerName}
          bankName={bankName}
          cardNumbers={cardNumbers}
          expirationDate={expirationDate}
        />
      </Style.CardWrapper>
      <Style.AliasInput />
      <Button text={'확인'} />
    </Style.Root>
  );
};

export default CardCompletion;
