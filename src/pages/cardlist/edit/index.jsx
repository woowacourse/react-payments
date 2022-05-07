import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useCardInput } from '../../../hooks/useCardInput';
import PageTemplate from '../../../components/commons/PageTemplate';
import Card from '../../../components/card/Card';
import CardInputForm from '../../../components/form/InputForm/CardInputForm';
import { ROUTE } from '../../../route';

function EditCard({ cardListDispatch, getCard, routeState: { cardId } }) {
  const navigate = useNavigate();

  const [{ id, alias, ...cardInput }, cardInputDispatch, getInputState] = useCardInput(
    getCard(cardId),
  );

  const formSubmitAction = payload => {
    cardListDispatch({ type: 'UPDATE_CARD', payload: { ...payload, id: cardId } });
    navigate(ROUTE.cardSuccess.route, { replace: true, state: { cardId } });
  };

  return (
    <PageTemplate>
      <Card cardInformation={cardInput} />
      <CardInputForm
        cardInput={cardInput}
        cardInputDispatch={cardInputDispatch}
        formSubmitAction={formSubmitAction}
        getInputState={getInputState}
      />
    </PageTemplate>
  );
}

EditCard.propTypes = {
  cardListDispatch: PropTypes.func,
  getCard: PropTypes.func,
  routeState: PropTypes.object,
};

export default EditCard;
