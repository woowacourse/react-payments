import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../../shared/Card';
import Button from '../../shared/Button';
import { firestore } from '../../../firebase';
import * as Style from './style';

const CardCompletion = (props) => {
  const {
    cardData: { bankId, cardNumbers, expirationDate, ownerName },
    handleGoNext,
  } = props;

  const [cardAlias, setCardAlias] = useState('');

  const handleRegisterCard = (event) => {
    event.preventDefault();

    firestore.collection('cards').add({ bankId, cardNumbers, expirationDate, ownerName, cardAlias });
    handleGoNext();
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
          bankId={bankId}
          cardNumbers={cardNumbers}
          ownerName={ownerName}
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
  handleGoNext: PropTypes.func.isRequired,
};

export default CardCompletion;
