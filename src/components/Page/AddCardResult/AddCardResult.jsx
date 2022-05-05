import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CardIndexContext, CardListContext } from '../../../contexts';
import NextButton from '../../Button';
import Card from '../../Card';
import CardNickNameInput from '../../Input/CardNickNameInput';

const Container = styled.div`
  display: flex;
  width: 375px;
  height: 701px;
  flex-direction: column;
  position: relative;
`;

const TitleWrapper = styled.div`
  margin-top: 130px;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
`;

const CardWrapper = styled.div`
  margin-top: 77px;
`;

const CardNickNameInputWrapper = styled.div`
  text-align: center;
  margin-top: 33px;
`;
const NextButtonWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 30px;
`;

const AddCardResultPage = () => {
  const { cardList, setCardList } = useContext(CardListContext);
  const { cardIndex, setCardIndex } = useContext(CardIndexContext);

  const { nickname, ownerName, cardType, cardNumber, expiredDate, secureCode, password } =
    cardList[cardIndex - 1];

  return (
    <Container>
      <TitleWrapper>카드 등록이 완료되었습니다.</TitleWrapper>
      <CardWrapper>
        <Card
          name={ownerName}
          expiredMonth={expiredDate.expiredMonth}
          expiredYear={expiredDate.expiredYear}
          cardNumbers={cardNumber}
          cardInfo={cardType}
          size={'large'}
        />
      </CardWrapper>
      <CardNickNameInputWrapper>
        <CardNickNameInput />
      </CardNickNameInputWrapper>
      <NextButtonWrapper>
        <Link to="/react-payments/list">
          <NextButton name="confirmButton">확인</NextButton>
        </Link>
      </NextButtonWrapper>
    </Container>
  );
};

export default AddCardResultPage;
