import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../../components/card/Card';
import PageTemplate from '../../../components/commons/PageTemplate';
import CardInputForm from '../../../components/form/InputForm/CardInputForm';
import { useCardInput } from '../../../hooks/useCardInput';
import { generateNonDuplicatedId } from '../../../utils/util';
import PropTypes from 'prop-types';
import { ROUTE } from '../../../route';

function AddCard({ cardListDispatch }) {
  const navigate = useNavigate();
  const [cardInput, cardInputDispatch] = useCardInput();

  const formSubmitAction = payload => {
    const randomId = generateNonDuplicatedId(payload.cardType);

    cardListDispatch({
      type: 'ADD_CARD',
      payload: { ...payload, id: randomId },
    });
    navigate(ROUTE.cardSuccess.route, { replace: true, state: { cardId: randomId } });
  };

  return (
    <PageTemplate>
      <Card cardInformation={cardInput} />
      <CardInputForm
        cardInput={cardInput}
        cardInputDispatch={cardInputDispatch}
        formSubmitAction={formSubmitAction}
      />
    </PageTemplate>
  );
}

AddCard.propTypes = {
  cardListDispatch: PropTypes.func,
};

export default AddCard;
