import { useNavigate } from 'react-router-dom';
import Card from '../../../components/card/Card';
import PageTemplate from '../../../components/commons/PageTemplate';
import CardInputForm from '../../../components/form/InputForm/CardInputForm';
import { useCardInput } from '../../../hooks/useCardInput';
import { generateNonDuplicatedId } from '../../../utils/util';
import PropTypes from 'prop-types';
import { ROUTE } from '../../../route';
import { CardListDispatch, CardListReducerActionType } from '@/hooks/useCardList';

type AddCardProps = {
  cardListDispatch: CardListDispatch;
};

function AddCard({ cardListDispatch }: AddCardProps) {
  const navigate = useNavigate();
  const [cardInput, cardInputDispatch, getInputState] = useCardInput();

  const formSubmitAction = (payload) => {
    const randomId = generateNonDuplicatedId();

    cardListDispatch({
      type: CardListReducerActionType.ADD_CARD,
      payload: { ...payload, id: randomId },
    });
    navigate(ROUTE.cardSuccess.route, { replace: true, state: { cardId: randomId } });
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

AddCard.propTypes = {
  cardListDispatch: PropTypes.func,
};

export default AddCard;
