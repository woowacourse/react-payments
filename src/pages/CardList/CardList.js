import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Card } from '../../components';
import { ROUTE, LOCAL_STORAGE_KEY, MESSAGE } from '../../constants';
import { useLocalStorage } from '../../hooks';
import { ScreenContainer } from '../../styles/common.styles';

import Styled from './CardList.styles';

let timer = null;

const CardList = () => {
  const [deleteMode, setDeleteMode] = useState(false);

  const cardList = useLocalStorage(LOCAL_STORAGE_KEY.CARD_LIST);
  const history = useHistory();

  const onClickCardContainer = (event) => {
    const cardId = event.target.getAttribute('data-card-id');

    // eslint-disable-next-line no-alert
    if (!cardId || !window.confirm(MESSAGE.CARD_REMOVE_CONFIRM)) {
      if (!event.target.getAttribute('data-is-card')) {
        setDeleteMode(false);
      }

      return;
    }

    const newCardList = cardList.value.filter((card) => card.id !== cardId).reverse();
    cardList.setValue(newCardList);
  };

  const onClickCard = (event) => {
    const {
      target: { id },
    } = event;

    if (deleteMode) return;

    const targetCard = cardList.value.find((card) => card.id === id);
    history.push({
      pathname: ROUTE.COMPLETE,
      state: {
        card: targetCard,
      },
    });
  };

  const onMouseDown = () => {
    timer = setTimeout(() => {
      setDeleteMode(true);
    }, 2000);
  };

  const onMouseUp = () => {
    if (timer) {
      clearTimeout(timer);
    }
  };

  useEffect(() => () => clearTimeout(timer));

  return (
    <ScreenContainer>
      <Styled.Container deleteMode={deleteMode} onClick={onClickCardContainer}>
        <Link to={ROUTE.ADD}>
          <Styled.AddCard>
            <svg
              width="30"
              height="30"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.30372 7.18848H15.251V9.75195H9.30372V16.4902H6.57911V9.75195H0.631842V7.18848H6.57911V0.962891H9.30372V7.18848Z"
                fill="#575757"
              />
            </svg>
          </Styled.AddCard>
        </Link>
        <ul>
          {cardList.value &&
            cardList.value?.reverse().map((card) => {
              const {
                id,
                cardNumbers,
                cardCompanyName,
                cardCompanyColor,
                ownerName,
                expiryDate,
                nickname,
              } = card;

              return (
                <li key={id}>
                  {deleteMode && (
                    <Styled.DeleteButton type="button" data-card-id={id}>
                      X
                    </Styled.DeleteButton>
                  )}
                  <Card
                    id={id}
                    onClick={onClickCard}
                    bgColor={cardCompanyColor}
                    companyName={cardCompanyName}
                    cardNumbers={cardNumbers}
                    ownerName={ownerName}
                    expiryDate={expiryDate}
                    onMouseDown={onMouseDown}
                    onMouseUp={onMouseUp}
                    draggable
                  />
                  <Styled.Row>{nickname}</Styled.Row>
                </li>
              );
            })}
        </ul>
      </Styled.Container>
    </ScreenContainer>
  );
};

export default CardList;
