import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CardIndexContext, CardListContext } from '../../../contexts';
import NextButton from '../../Button';
import Card from '../../Card';
import CardNickNameInput from '../../Input/CardNickNameInput';
import useInputValue from '../../../hooks/useInputValue';
import { checkCardNickName } from '../../../validation';

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

  const [cardNickName, isCardNickNameError, onChangeCardNickName] = useInputValue({
    validation: checkCardNickName,
  });

  const { nickName, ownerName, cardType, cardNumber, expiredDate } = cardList[cardIndex - 1];

  const submitCardNickName = (e) => {
    const updatedCardList = cardList.map((item) =>
      item.id === cardIndex - 1 ? { ...item, nickName: cardNickName } : item,
    );
    setCardList(updatedCardList);
  };

  return (
    <Container>
      <TitleWrapper>카드 등록이 완료되었습니다.</TitleWrapper>
      <CardWrapper>
        <Card
          name={ownerName}
          expiredMonth={expiredDate.expiredMonth}
          expiredYear={expiredDate.expiredYear}
          cardNumbers={cardNumber}
          cardType={cardType}
          size={'large'}
        />
      </CardWrapper>
      <CardNickNameInputWrapper>
        <CardNickNameInput onChange={onChangeCardNickName} />
      </CardNickNameInputWrapper>
      <NextButtonWrapper>
        {!isCardNickNameError && (
          <Link to="/react-payments/list">
            <NextButton name="confirmButton" onClick={submitCardNickName}>
              확인
            </NextButton>
          </Link>
        )}
      </NextButtonWrapper>
    </Container>
  );
};

export default AddCardResultPage;
