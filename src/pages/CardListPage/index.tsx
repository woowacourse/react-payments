import { useState } from 'react';
import { useCards } from '../../context/CardsStateContext';
import CreditCard from '../../components/shared/CreditCard';
import CardList from '../../components/cardList';
import Template from '../../components/shared/Template';
import { CARD_LIST_PAGE_TITLE } from '../../constants/title';
import { withVibration } from '../../utils/vibrate';
import { IconButton } from '../../components/shared/Button';

const EDIT_MODE_VIBRATION_TIME = 200;

const CardListPage = () => {
  const { cards } = useCards();
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
              <IconButton backgroundImage={'/buttons/close-btn.png'} onClick={() => alert(card.id + ' 이름 삭제!')} />
            )}
            <CreditCard
              cardBrand={card.cardBrand}
              ownerName={card.ownerName}
              cardNumber={card.cardNumber}
              expDate={card.expDate}
            />
            {isEditMode ? (
              <span className="nickname edit" onClick={() => alert(card.id + '이름 수정!')}>
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
