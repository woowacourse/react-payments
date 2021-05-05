import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from '../../shared/Card';
import Button from '../../shared/Button';
import { addCardRequest, updateCardRequest } from '../../../request';
import * as Style from './style';

const CardCompletion = (props) => {
  const {
    cardData: { bankId, cardNumbers, expirationDate, ownerName, cardAlias },
    handleConfirmPage,
    isEditing,
    cardId,
  } = props;

  const [aliasInput, setAliasInput] = useState('');

  const pageTitle = isEditing ? '카드 별칭을 수정해주세요' : '카드등록이 완료되었습니다.';

  const handleChangeAlias = (event) => {
    const value = event.target.value;
    setAliasInput(value);
  };

  const handleRegisterCard = async (event) => {
    event.preventDefault();

    if (isEditing) {
      await updateCardAlias();
    } else {
      try {
        addCardRequest({ bankId, cardNumbers, expirationDate, ownerName, cardAlias: aliasInput });
      } catch (error) {
        console.error(error);
      }
    }

    handleConfirmPage();
  };

  const updateCardAlias = async () => {
    try {
      await updateCardRequest(cardId, { cardAlias: aliasInput });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (isEditing) {
      setAliasInput(cardAlias);
    }
  }, [isEditing, cardAlias]);

  return (
    <Style.Root>
      <Style.Title>{pageTitle}</Style.Title>
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
        <Style.AliasInput aria-label="card-alias-input" value={aliasInput} onChange={handleChangeAlias} />
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
  handleConfirmPage: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  cardId: PropTypes.string,
};

CardCompletion.defaultProps = {
  isEditing: false,
};

export default CardCompletion;
