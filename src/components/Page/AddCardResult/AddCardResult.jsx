import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useCardListStore } from 'contexts/index';
import useInputValue from 'hooks/useInputValue';
import { checkCardNickName } from 'validation';

import NextButton from 'components/Button';
import Card from 'components/Card';
import CardNickNameInput from 'components/Input/CardNickNameInput';

import ErrorMessage from 'components/ErrorMessage';

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

const ErrorMessageWrapper = styled.div`
  margin-top: 20px;
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
  const { cardList, setCardList } = useCardListStore();

  const [cardNickName, isCardNickNameError, onChangeCardNickName] = useInputValue({
    validation: checkCardNickName,
  });

  const { ownerName, cardType, cardNumbers, expiredDate } = cardList[cardList.length - 1];

  const submitCardNickName = () => {
    const updatedCardList = cardList.map((item) =>
      item.id === cardList.length - 1 ? { ...item, nickName: cardNickName } : item,
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
          cardNumbers={cardNumbers}
          cardType={cardType}
          size={'large'}
        />
      </CardWrapper>
      <CardNickNameInputWrapper>
        <CardNickNameInput onChange={onChangeCardNickName} />
        <ErrorMessageWrapper>
          {isCardNickNameError && <ErrorMessage message={'카드 닉네임은 20자 이하여야 합니다'} />}
        </ErrorMessageWrapper>
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
