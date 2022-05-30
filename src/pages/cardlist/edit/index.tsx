import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useCardInput } from '../../../hooks/useCardInput';
import PageTemplate from '../../../components/commons/PageTemplate';
import Card from '../../../components/card/Card';
import CardInputForm from '../../../components/form/InputForm/CardInputForm';
import { ROUTE } from '../../../route';
import withRouteState from '../../../helper/withRouteState';
import { CardListDispatch, GetCard, CardListReducerActionType } from '@/hooks/useCardList';
type EditCardProps = {
  cardListDispatch: CardListDispatch;
  getCard: GetCard;
  routeState: { cardId: string };
};
function EditCard({ cardListDispatch, getCard, routeState: { cardId } }: EditCardProps) {
  const navigate = useNavigate();

  const [cardInput, cardInputDispatch, getInputState] = useCardInput(getCard(cardId));

  const formSubmitAction = (payload) => {
    cardListDispatch({
      type: CardListReducerActionType.UPDATE_CARD,
      payload: { ...payload, id: cardId },
    });
    navigate(ROUTE.cardSuccess.route, { replace: true, state: { cardId } });
  };

  return (
    <PageTemplate>
      <Card {...cardInput} />
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

export default withRouteState(EditCard);
