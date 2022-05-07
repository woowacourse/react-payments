import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCardInput } from '../../../hooks/useCardInput';
import PageTemplate from '../../../components/commons/PageTemplate';
import Card from '../../../components/card/Card';
import CardInputForm from '../../../components/form/InputForm/CardInputForm';
import { CARD_DEFINITION } from '../../../components/types';
import { ROUTE } from '../../../route';

function EditCard({ cardList, cardListDispatch, routeState: { cardId } }) {
  const navigate = useNavigate();

  const [{ id, alias, ...cardInput }, cardInputDispatch] = useCardInput(
    cardList.find(({ id }) => cardId === id),
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
      />
    </PageTemplate>
  );
}

EditCard.propTypes = {
  cardList: PropTypes.arrayOf(CARD_DEFINITION),
  cardListDispatch: PropTypes.func,
  routeState: PropTypes.object,
};

export default EditCard;
