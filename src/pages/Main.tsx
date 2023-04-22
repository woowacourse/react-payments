import styled from 'styled-components';
import { v4 } from 'uuid';
import { Layout } from '../layout';
import { CardViewer } from '../components/CardViewer';
import { useNavigate } from 'react-router-dom';
import { cardDataService } from '../domains/cardDataService';

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

    margin-bottom: 25px;

    font-weight: bold;
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
    font-size: 14px;
    color: #575757;
  `,

  AddCardButton: styled.button`
    all: unset;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 213px;
    height: 133px;

    border-radius: 5px;
    background-color: #e5e5e5;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);

    font-size: 30px;

    cursor: pointer;
  `,
};
