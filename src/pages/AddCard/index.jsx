import React from 'react';
import { useCardInput } from '../../hooks/useCardInput';
import Card from '../../components/card/Card';
import CardInputForm from '../../components/form/InputForm/CardInputForm';
import Page from '..';
import PropTypes from 'prop-types';
import { CARD_DEFINITION } from '../../components/types';

function AddCard({ card, cardListDispatch }) {
  const [cardInput, cardInputDispatch] = useCardInput();

  return (
    <Page>
      <Card cardInformation={cardInput} />
      <CardInputForm
        cardInput={cardInput}
        cardInputDispatch={cardInputDispatch}
        cardListDispatch={cardListDispatch}
      />
    </Page>
  );
}

AddCard.propTypes = {
  card: CARD_DEFINITION,
  cardListDispatch: PropTypes.func,
};

export default AddCard;
