import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../../shared/Card';
import Button from '../../shared/Button';
import { dummyBanks } from '../../../mockData';
import { firestore } from '../../../firebase';
import * as Style from './style';

const CardCompletion = (props) => {
  const {
    cardData: { bankId, cardNumbers, expirationDate, ownerName },
  } = props;

  const [cardAlias, setCardAlias] = useState('');
  const { color: cardColor, name: bankName } = dummyBanks.find(({ id }) => id === bankId);

  const cardsRef = firestore.collection('cards');

  const handleRegisterCard = (event) => {
    event.preventDefault();

    cardsRef.add({ bankId, cardNumbers, expirationDate, ownerName, cardAlias });
  };

  const handleChangeAlias = (event) => {
    const value = event.target.value;
    setCardAlias(value);
  };

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
      <form id="alias-form" onSubmit={handleRegisterCard}>
        <Style.AliasInput aria-label="card-alias-input" value={cardAlias} onChange={handleChangeAlias} />
        <Button type="submit" formId="alias-form" text="확인" />
      </form>
    </Style.Root>
  );
};

CardCompletion.propTypes = {
  cardData: PropTypes.shape({
    bankId: PropTypes.string.isRequired,
    cardNumbers: PropTypes.object.isRequired,
    expirationDate: PropTypes.object.isRequired,
    ownerName: PropTypes.string.isRequired,
  }),
};

export default CardCompletion;
