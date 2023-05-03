import styled from 'styled-components';
import { CardViewer } from '../components/cardViewer';
import { Layout } from '../layout';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { useCardList } from '../hooks/useCardList';
import { useCardInfoActionContext } from '../hooks/cardInfoContext';
import React, { useEffect } from 'react';
import { Card } from '../types/card';

export const Main = () => {
  const navigate = useNavigate();

  const { cardList } = useCardList();

  const {
    resetAll,
    setCardNumber,
    setCompanyId,
    setExpirationDate,
    setOwnerName,
    setPassword,
    setSecurityCode,
    setCardId,
    setNickName,
  } = useCardInfoActionContext();

  const { getCardById } = useCardList();

  const setCardInfo = (card: Card) => {
    if (card.companyId) setCompanyId(card.companyId);

    Array.from({ length: 4 }).forEach((_, i) => {
      setCardNumber(i, card.cardNumber[i]);
    });

    setExpirationDate('month', card.expirationDate.month);
    setExpirationDate('year', card.expirationDate.year);

    setOwnerName(card.ownerName);

    setSecurityCode(card.securityCode);

    Array.from({ length: 2 }).forEach((_, i) => {
      setPassword(i, card.password[i]);
    });

    if (card.nickName) setNickName(card.nickName);
  };

  const handleClickCardPreview = (cardId: string) => {
    const card = getCardById(cardId);

    setCardId(cardId);

    setCardInfo(card);

    navigate('/register');
  };

  const handleClickCardNickName = (cardId: string) => {
    const card = getCardById(cardId);

    setCardId(cardId);

    setCardInfo(card);

    navigate('/register/nickName', { state: 'modify' });
  };

  useEffect(() => {
    resetAll();
  }, []);

  return (
    <Layout>
      <Style.Header>보유 카드</Style.Header>
      <Style.CardListWrapper>
        {cardList.length === 0 ? (
          <Style.EmptyCardListWrapper>
            <Style.Caption>새로운 카드를 등록해주세요.</Style.Caption>
            <Style.AddCardButton onClick={() => navigate('/register')}>
              +
            </Style.AddCardButton>
          </Style.EmptyCardListWrapper>
        ) : (
          cardList.map((card) => {
            return (
              <div key={v4()}>
                <CardViewer
                  key={v4()}
                  cardNumber={card.cardNumber}
                  expirationDate={card.expirationDate}
                  ownerName={card.ownerName}
                  companyId={card.companyId}
                  handleClick={() => {
                    // eslint-disable-next-line no-restricted-globals
                    if (confirm('카드 정보를 수정하시겠습니까?'))
                      handleClickCardPreview(card.cardId);
                  }}
                />
                <Style.CardNickName
                  onClick={() => {
                    // eslint-disable-next-line no-restricted-globals
                    if (confirm('카드 별명을 수정하시겠습니까?')) {
                      handleClickCardNickName(card.cardId);
                    }
                  }}
                >
                  {card.nickName ?? ''}
                </Style.CardNickName>
              </div>
            );
          })
        )}
        {cardList.length !== 0 && (
          <Style.AddCardButton onClick={() => navigate('/register')}>
            +
          </Style.AddCardButton>
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
  CardNickName: styled.span`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    font-size: 15px;
    font-weight: 500;

    cursor: pointer;
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
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  `,
};
