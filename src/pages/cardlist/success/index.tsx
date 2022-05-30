import PageTemplate from '../../../components/commons/PageTemplate';
import Card from '../../../components/card/Card';
import AliasInputForm from '../../../components/form/InputForm/AliasInputForm';
import PropTypes from 'prop-types';
import withRouteState from '../../../helper/withRouteState';
import { CardListDispatch, GetCard } from '@/hooks/useCardList';
type CardSuccessProps = {
  cardListDispatch: CardListDispatch;
  getCard: GetCard;
  routeState: {
    cardId: string;
  };
};
function CardSuccess({ cardListDispatch, getCard, routeState: { cardId } }: CardSuccessProps) {
  const card = getCard(cardId);

  return (
    <PageTemplate>
      <div className="flex-center">
        <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
      </div>
      {card && <Card {...card} />}
      <AliasInputForm card={card} cardListDispatch={cardListDispatch} />
    </PageTemplate>
  );
}

CardSuccess.propTypes = {
  cardListDispatch: PropTypes.func,
  getCard: PropTypes.func,
  routeState: PropTypes.object,
};
export default withRouteState(CardSuccess);
