import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CardNumber, ExpiredDate, CardOwnerName, SecureCode, Password } from './index';

import NextButton from 'components/Button';
import Header from 'components/Header';
import {
  checkExpiredMonth,
  checkExpiredYear,
  checkOwnerName,
  checkSecureCode,
  checkPassword,
  checkCardNumber,
} from 'validation/index';

import Card from 'components/Card';
import Palette from 'components/Palette';
import useInputValue from 'hooks/useInputValue';

import { useCardListStore } from 'contexts';

const Container = styled.form`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  position: relative;
`;

const NextButtonWrapper = styled.div`
  position: absolute;
  right: 20px;
  bottom: 0;
`;

const Dimmed = styled.div`
  display: none;
  visibility: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #00000080;
  z-index: 10;

  &.is-active {
    display: block;
    visibility: visible;
  }
`;

const AddCardPage = () => {
  const { cardList, setCardList } = useCardListStore();

  const [firstCardNumber, isFirstCardNumberError, onChangeFirstCardNumber] = useInputValue({
    validation: checkCardNumber,
  });
  const [secondCardNumber, isSecondCardNumberError, onChangeSecondCardNumber] = useInputValue({
    validation: checkCardNumber,
  });
  const [thirdCardNumber, isThirdCardNumberError, onChangeThirdCardNumber] = useInputValue({
    validation: checkCardNumber,
  });
  const [fourthCardNumber, isFourthCardNumberError, onChangeFourthCardNumber] = useInputValue({
    validation: checkCardNumber,
  });

  const [expiredMonth, isExpiredMonthError, onChangeExpiredMonth] = useInputValue({
    validation: checkExpiredMonth,
  });
  const [expiredYear, isExpiredYearError, onChangeExpiredYear] = useInputValue({
    validation: checkExpiredYear,
  });

  const [ownerName, isOwnerNameError, onChangeOwnerName] = useInputValue({
    validation: checkOwnerName,
  });

  const [secureCode, isSecureCodeError, onChangeSecureCode] = useInputValue({
    validation: checkSecureCode,
  });

  const [firstPassword, isFirstPasswordError, onChangeFirstPassword] = useInputValue({
    validation: checkPassword,
  });
  const [secondPassword, isSecondPasswordError, onChangeSecondPassword] = useInputValue({
    validation: checkPassword,
  });

  const [cardType, setCardType] = useState({ color: 'red', name: '포코 카드' });

  const [isModalOpened, setIsModalOpened] = useState(false);

  const isValidatedForm =
    !isFirstCardNumberError &&
    !isSecondCardNumberError &&
    !isThirdCardNumberError &&
    !isFourthCardNumberError &&
    !isExpiredMonthError &&
    !isExpiredYearError &&
    !isOwnerNameError &&
    !isSecureCodeError &&
    !isFirstPasswordError &&
    !isSecondPasswordError;

  const isValidatedValueLength =
    firstCardNumber.length > 0 &&
    secondCardNumber.length > 0 &&
    thirdCardNumber.length > 0 &&
    fourthCardNumber.length > 0 &&
    firstPassword.length > 0 &&
    secondPassword.length > 0 &&
    secureCode.length > 0 &&
    expiredMonth.length > 0 &&
    expiredYear.length > 0;

  const onSubmitCardForm = () => {
    const newCardObj = createCardObject();
    setCardList((prevCard) => [...prevCard, newCardObj]);
  };

  const openModal = () => {
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  const onClickCardSelector = (card) => () => {
    setCardType(card);
  };

  const createCardObject = () => {
    return {
      id: cardList.length,
      nickName: '',
      ownerName: ownerName,
      cardType: cardType,
      cardNumbers: [firstCardNumber, secondCardNumber, thirdCardNumber, fourthCardNumber],
      expiredDate: { expiredMonth: expiredMonth, expiredYear: expiredYear },
      secureCode: secureCode,
      password: [firstPassword, secondPassword],
    };
  };

  return (
    <Container>
      <Header>카드추가</Header>
      <Card
        name={ownerName}
        expiredMonth={expiredMonth}
        expiredYear={expiredYear}
        cardNumbers={[firstCardNumber, secondCardNumber, thirdCardNumber, fourthCardNumber]}
        cardType={cardType}
        onClick={openModal}
        size="small"
      />
      <CardNumber
        cardNumbers={[firstCardNumber, secondCardNumber, thirdCardNumber, fourthCardNumber]}
        onChangeFirstCardNumber={onChangeFirstCardNumber}
        onChangeSecondCardNumber={onChangeSecondCardNumber}
        onChangeThirdCardNumber={onChangeThirdCardNumber}
        onChangeFourthCardNumber={onChangeFourthCardNumber}
        isError={
          isFirstCardNumberError ||
          isSecondCardNumberError ||
          isThirdCardNumberError ||
          isFourthCardNumberError
        }
      />
      <ExpiredDate
        expiredMonth={expiredMonth}
        expiredYear={expiredYear}
        onChangeExpiredMonth={onChangeExpiredMonth}
        onChangeExpiredYear={onChangeExpiredYear}
        isError={isExpiredMonthError || isExpiredYearError}
        data-testid="expired-date"
      />
      <CardOwnerName
        ownerName={ownerName}
        onChangeOwnerName={onChangeOwnerName}
        isError={isOwnerNameError}
        data-testid="card-owner-name"
      />
      <SecureCode
        secureCode={secureCode}
        onChangeSecureCode={onChangeSecureCode}
        isError={isSecureCodeError}
        data-testid="secure-code"
      />
      <Password
        firstPassword={firstPassword}
        onChangeFirstPassword={onChangeFirstPassword}
        secondPassword={secondPassword}
        onChangeSecondPassword={onChangeSecondPassword}
        isError={isFirstPasswordError || isSecondPasswordError}
        data-testid="password"
      />
      {isValidatedForm && isValidatedValueLength && (
        <NextButtonWrapper>
          <Link to="/react-payments/result">
            <NextButton name="submitButton" onClick={onSubmitCardForm}>
              다음
            </NextButton>
          </Link>
        </NextButtonWrapper>
      )}
      <Dimmed onClick={closeModal} className={isModalOpened ? 'is-active' : ''} />
      <Palette onClickCardSelector={onClickCardSelector} isModalOpened={isModalOpened} />
    </Container>
  );
};

export default AddCardPage;
