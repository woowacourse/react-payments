import { useState, useEffect } from 'react';
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
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/cards');
        setCardData(response.data);
        setLoading(false);
      } catch {
        setServerOK(false);
      }
    };
    fetchData();
  });

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
        {cardData.map(card => (
          <Styled.CardContainer>
            <CreditCard
              backgroundColor={card.selectedCardInfo.color}
              cardType={card.selectedCardInfo.name}
              cardNumber={Object.values(card.cardNumber)}
              cardOwner={card.cardOwner}
              cardExpiredDate={card.cardExpiredDate}
            />
            <Styled.CardNickName>{card.cardNickName}</Styled.CardNickName>
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
