import styled from 'styled-components';
import { CardViewer } from '../components/CardViewer';
import { cardDataService } from '../domains/cardDataService';
import { Layout } from '../layout';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

export const Main = () => {
  const navigate = useNavigate();
  const cardList = cardDataService.getCardList();

  return (
    <Layout>
      <Style.Header>보유 카드</Style.Header>
      <Style.CardListWrapper>
        {cardList.length === 0 ? (
          <Style.EmptyCardListWrapper>
            <Style.Caption>새로운 카드를 등록해주세요.</Style.Caption>
            <Style.AddCardButton onClick={() => navigate('/register')}>+</Style.AddCardButton>
          </Style.EmptyCardListWrapper>
        ) : (
          cardList.map((card) => {
            const { cardNumber, expirationDate, ownerName } = card;
            return (
              <CardViewer
                key={v4()}
                cardNumber={cardNumber}
                expirationDate={expirationDate}
                ownerName={ownerName}
              />
            );
          })
        )}
        {cardList.length !== 0 && (
          <Style.AddCardButton onClick={() => navigate('/register')}>+</Style.AddCardButton>
        )}
      </Style.CardListWrapper>
    </Layout>
  );
};

const Style = {
  Header: styled.div`
    display: flex;
    align-items: center;

    font-weight: bold;

    margin-bottom: 25px;
  `,
  CardListWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 318px;
    min-height: 600px;

    gap: 46px;
  `,
  EmptyCardListWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 9px;
  `,
  Caption: styled.span`
    color: #575757;
    font-size: 14px;
  `,
  AddCardButton: styled.button`
    all: unset;

    width: 241px;
    height: 161px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #e5e5e5;
    border-radius: 5px;
    font-size: 30px;
    cursor: pointer;
  `,
};
