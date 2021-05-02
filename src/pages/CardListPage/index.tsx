import { useState, VFC } from 'react';
import { useCards } from '../../context/CardsStateContext';
import CreditCard from '../../components/shared/CreditCard';
import CardList from '../../components/cardList';
import Template from '../../components/shared/Template';
import { CARD_LIST_PAGE_TITLE } from '../../constants/title';
import { withVibration } from '../../utils/vibrate';
import { IconButton } from '../../components/shared/Button';
import { RouteComponentProps } from 'react-router';

const EDIT_MODE_VIBRATION_TIME = 200;

const CardListPage: VFC<RouteComponentProps> = ({ history }) => {
  const { cards, deleteCard } = useCards();
  const [isEditMode, setIsEditMode] = useState(false);

  let timerId: NodeJS.Timeout | null = null;

  const onTouchStart = () => {
    const PRESS_DURATION = 1000;

    timerId = setTimeout(
      () => withVibration(() => setIsEditMode(!isEditMode), EDIT_MODE_VIBRATION_TIME),
      PRESS_DURATION
    );
  };

  const onTouchEnd = () => {
    if (!timerId) return;

    clearTimeout(timerId);
    timerId = null;
  };

  const onClickDeleteCard = (id: string) => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;

    deleteCard(id);
  };

  return (
    <Template title={CARD_LIST_PAGE_TITLE}>
      <CardList>
        {cards.map(card => (
          <li
            key={card.id}
            className="card-item"
            onMouseDown={onTouchStart}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            onMouseUp={onTouchEnd}
          >
            {isEditMode && (
              <IconButton backgroundImage={'/buttons/close-btn.png'} onClick={() => onClickDeleteCard(card.id || '')} />
            )}
            <CreditCard
              cardBrand={card.cardBrand}
              ownerName={card.ownerName}
              cardNumber={card.cardNumber}
              expDate={card.expDate}
            />
            {isEditMode ? (
              <span className="nickname edit" onClick={() => history.push(`/edit/${card.id}`)}>
                {card.nickname} <img src={process.env.PUBLIC_URL + '/images/pencil-icon.svg'} />
              </span>
            ) : (
              <span className="nickname">{card.nickname}</span>
            )}
          </li>
        ))}
      </CardList>
    </Template>
  );
};

export default CardListPage;
