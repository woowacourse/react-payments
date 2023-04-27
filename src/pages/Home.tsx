import { useNavigate } from 'react-router-dom';
import { CardDB } from 'db/Cards';
import styled from 'styled-components';
import { CreditCard, Header } from 'components/common';
import { PageContainer } from 'components/style/PageContainer';
import { useEffect, useState } from 'react';
import { Card } from 'components/common/Card/types';

function Home() {
  const [cards, setCards] = useState<Card[]>(CardDB.getCards());
  const navigate = useNavigate();

  const goRegister = () => {
    navigate('/register');
  };

  useEffect(() => {}, [cards]);

  return (
    <>
      <PageContainer>
        <Header text={'보유카드'} />
        <CardContainer>
          <span>새로운 카드를 등록해주세요</span>
          {cards.map((card) => (
            <CreditCard card={card} />
          ))}
          <RegisterButton onClick={goRegister}>+</RegisterButton>
        </CardContainer>
      </PageContainer>
    </>
  );
}

const RegisterButton = styled.button`
  width: 208px;
  height: 123px;
  border: none;
  font-size: 30px;
  color: #575757;
  border-radius: 5px;
  cursor: pointer;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 22px;
  gap: 35px;
`;

export default Home;
