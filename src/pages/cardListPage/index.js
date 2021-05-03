import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Header } from '../../components/commons/header/Header';
import { Button } from '../../components/commons/button/Button';
import { Card } from '../../components/commons/card/Card';
import Styled from './style';
import { Link } from 'react-router-dom';
import { CreditCard } from '../../components/commons/card/CreditCard';
import { ReactComponent as Spinner } from '../../assets/spinner.svg';

const CardListPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [isServerOK, setServerOK] = useState(true);
  const [clickedCardId, setClickedCardId] = useState(null);
  const cardData = useRef(null);
  console.log(
    'isLoading:',
    isLoading,
    'isServerOk:',
    isServerOK,
    'clickedCardid:',
    clickedCardId,
    'cardData:',
    cardData
  );

  const handleCardClick = cardId => {
    setClickedCardId(prev => {
      if (prev === cardId) {
        return null;
      }
      return cardId;
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log('in');
      try {
        const response = await axios.get('http://localhost:4000/cards');
        cardData.current = response.data;
        console.log(response.data);
        setLoading(false);
      } catch {
        setServerOK(false);
      }
    };
    fetchData();
    return () => {
      console.log('out');
    };
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

  return (
    <>
      <Header>보유카드</Header>
      <Styled.Container>
        {cardData.current.map(card => (
          <Styled.CardContainer>
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
                <Styled.DeleteButton type="button">🗑️ 삭제</Styled.DeleteButton>
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
