import { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from '../../components/commons/header/Header';
import { Button } from '../../components/commons/button/Button';
import { Card } from '../../components/commons/card/Card';
import Styled from './style';
import { Link } from 'react-router-dom';
import { CreditCard } from '../../components/commons/card/CreditCard';
import { ReactComponent as Spinner } from '../../assets/spinner.svg';
import { STATUS_OK_CODE, URL } from '../../constants';

const CardListPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [isServerOK, setServerOK] = useState(true);
  const [clickedCardId, setClickedCardId] = useState(null);
  const [cardList, setCardList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL.CARDS);

        if (response.status === STATUS_OK_CODE.GET) {
          setCardList(response.data);
          setLoading(false);

          return;
        }
        setServerOK(false);
      } catch {
        setServerOK(false);
      }
    };
    fetchData();
  }, []);

  if (!isServerOK) {
    return (
      <Styled.Message>
        <div>🤦‍♂️ 연결이 원할하지 않습니다.</div>
        <div>잠시 후 다시 시도해주세요</div>
      </Styled.Message>
    );
  }

  if (isLoading) {
    return (
      <Styled.Message>
        <Spinner />
      </Styled.Message>
    );
  }

  const handleCardClick = cardId => {
    setClickedCardId(prev => {
      if (prev === cardId) {
        return null;
      }
      return cardId;
    });
  };

  const handleCardDelete = async cardId => {
    if (window.confirm('해당 카드를 삭제하시겠습니까?')) {
      try {
        const response = await axios.delete(`${URL.CARDS}${cardId}`);

        if (response.status === STATUS_OK_CODE.DELETE) {
          setCardList(prevState => prevState.filter(card => card.id !== cardId));

          return;
        }
        alert('카드를 삭제하는데 실패했습니다.\n잠시 후 다시 시도해주세요.');
      } catch {
        alert('카드를 삭제하는데 실패했습니다.\n잠시 후 다시 시도해주세요.');
      }
    }
  };

  return (
    <>
      <Header>보유카드</Header>
      <Styled.Container>
        {cardList.map(card => (
          <Styled.CardContainer key={card.id}>
            <div
              onClick={() => {
                handleCardClick(card.id);
              }}
            >
              <CreditCard
                backgroundColor={card.selectedCardInfo.color}
                cardType={card.selectedCardInfo.name}
                cardNumber={Object.values(card.cardNumber)}
                cardOwner={card.cardOwner}
                cardExpiredDate={card.cardExpiredDate}
              />
            </div>
            <Styled.CardNickname>{card.cardNickname}</Styled.CardNickname>
            {clickedCardId === card.id && (
              <Styled.ButtonContainer>
                <Link to={{ pathname: `/change/${card.id}`, cardInfo: card }}>
                  <Styled.EditButton type="button">✍️ 수정</Styled.EditButton>
                </Link>
                <Styled.DeleteButton
                  type="button"
                  onClick={() => {
                    handleCardDelete(card.id);
                  }}
                >
                  🗑️ 삭제
                </Styled.DeleteButton>
              </Styled.ButtonContainer>
            )}
          </Styled.CardContainer>
        ))}
        <Link to="/create">
          <Button>
            <Card boxShadow="none">+</Card>
          </Button>
        </Link>
      </Styled.Container>
    </>
  );
};

export default CardListPage;
