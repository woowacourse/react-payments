import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../../shared/Card';
import Button from '../../shared/Button';
import { updateCardRequest } from '../../../request';
import * as Style from './style';

const CardEdit = (props) => {
  const {
    cardData: { bankId, cardNumbers, expirationDate, ownerName, cardAlias },
    handleConfirmPage,
    cardId,
  } = props;

  const [aliasInput, setAliasInput] = useState(cardAlias);

  const pageTitle = '카드 별칭을 수정해주세요';

  const handleChangeAlias = (event) => {
    const value = event.target.value;
    setAliasInput(value);
  };

  const updateCardAlias = async (event) => {
    event.preventDefault();

    try {
      await updateCardRequest(cardId, { cardAlias: aliasInput });
    } catch (error) {
      console.error(error);
    }

    handleConfirmPage();
  };

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
      <form id="alias-form" onSubmit={updateCardAlias}>
        <Style.AliasInput aria-label="card-alias-input" value={aliasInput} onChange={handleChangeAlias} />
        <Button type="submit" formId="alias-form" text="확인" />
      </form>
    </Style.Root>
  );
};

CardEdit.propTypes = {
  handleConfirmPage: PropTypes.func.isRequired,
  cardId: PropTypes.string.isRequired,
};

export default CardEdit;
