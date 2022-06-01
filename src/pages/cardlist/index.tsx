import PageTemplate from '../../components/commons/PageTemplate';
import PropTypes from 'prop-types';
import { CARD_DEFINITION } from '../../components/types';
import Card from '../../components/card/Card';
import { uid } from 'react-uid';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '../../route';
import { Card as CardType } from '@/types/Card';
import { CardListState } from '@/hooks/useCardList';
type CardListProps = {
  cardList: CardListState;
};
function CardList({ cardList }: CardListProps) {
  const navigate = useNavigate();

  const onClickEmptyCardBox = () => {
    navigate(ROUTE.addCard.route, { replace: true });
  };

  const onClickCardBox = (id) => {
    navigate(ROUTE.editCard.route, { replace: true, state: { cardId: id } });
  };
  return (
    <PageTemplate>
      <div className="scroll-wrapper">
        {cardList.map(({ id, alias, ...cardInformation }: CardType) => (
          <div
            key={uid(id)}
            className="flex-column-center clickable-box"
            onClick={() => onClickCardBox(id)}
          >
            <Card {...cardInformation} />
            <span className="card-nickname">{alias}</span>
          </div>
        ))}
        <div className="card-box clickable-box" onClick={onClickEmptyCardBox}>
          <div className="empty-card">+</div>
        </div>
      </div>
    </PageTemplate>
  );
}

CardList.propTypes = {
  cardList: PropTypes.arrayOf(CARD_DEFINITION),
};

export default CardList;
