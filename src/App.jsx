import React, { useState, useRef, useLayoutEffect, useMemo } from 'react';
import styled from 'styled-components';

import { LABEL_PRIMARY_COLOR } from './style';

import Header from './components/common/Header';
import TextButton from './components/common/TextButton';
import Footer from './components/common/Footer';

import { CardShape, CardNumber, DueDate, CardOwner, CardSecurityCode, CardPassword } from './components';
import useInputHandler from './hooks/useInputHandler';
import { validateCardCode, validateCardNumbers, validateOwner, validatePassword } from './validator';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const convertToCardNumberString = ({ cardNoA, cardNoB, cardNoC, cardNoD }) =>
  `${cardNoA} ${cardNoB} ${'*'.repeat(cardNoC.length)} ${'*'.repeat(cardNoD.length)}`;

function App() {
  const targetRef = useRef();

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [cardCompany, setCardCompany] = useState({
    hexColor: '',
    name: '',
  });
  const {
    errorMessage: cardNoErrorMessage,
    setErrorMessage: setCardNoErrorMessage,
    inputValue: cardNumbers,
    updateInputState: updateCardNumbers,
  } = useInputHandler(validateCardNumbers, {
    cardNoA: '',
    cardNoB: '',
    cardNoC: '',
    cardNoD: '',
  });
  const [cardDate, setCardDate] = useState({
    month: '',
    year: '',
  });
  const {
    errorMessage: ownerErrorMessage,
    inputValue: owner,
    updateInputState: updateOwner,
  } = useInputHandler(validateOwner, {
    name: '',
  });
  const {
    errorMessage: cardCodeErrorMessage,
    inputValue: cardCode,
    updateInputState: updateCardCode,
  } = useInputHandler(validateCardCode, {
    cvc: '',
  });
  const {
    errorMessage: pwdErrorMessage,
    setErrorMessage: setPwdErrorMessage,
    inputValue: pwd,
    updateInputState: updatePwd,
  } = useInputHandler(validatePassword, {
    pwdNoA: '',
    pwdNoB: '',
  });

  const isCorrectCardNumber = useMemo(() => Object.values(cardNumbers).join('').length === 16, [cardNumbers]);
  const isCorrectPwd = useMemo(() => Object.values(pwd).join('').length === 2, [pwd]);
  const isRequiredCompleted = useMemo(
    () =>
      cardCompany.name &&
      cardCompany.hexColor &&
      isCorrectCardNumber &&
      cardDate.month &&
      cardDate.year &&
      cardCode.cvc.length === 3 &&
      isCorrectPwd,
    [cardCompany, cardDate, cardCode, isCorrectCardNumber, isCorrectPwd],
  );

  const handleSubmit = e => {
    e.preventDefault();

    if (!isRequiredCompleted) return;
    alert('카드 등록이 완료 되었습니다 :D');
  };

  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight,
      });
    }
  }, []);

  return (
    <main className="app" ref={targetRef}>
      <Header>{'카드추가'}</Header>
      <Form onSubmit={handleSubmit}>
        <CardShape
          dimensions={dimensions}
          cardCompany={cardCompany}
          setCardCompany={setCardCompany}
          cardNumber={convertToCardNumberString(cardNumbers)}
          cardOwnerName={owner.name}
          cardDate={cardDate}
        />
        <CardNumber
          errorMessage={cardNoErrorMessage}
          setErrorMessage={setCardNoErrorMessage}
          cardNumbers={cardNumbers}
          updateCardNumbers={updateCardNumbers}
          isCorrectCardNumber={isCorrectCardNumber}
        />
        <DueDate dimensions={dimensions} cardDate={cardDate} setCardDate={setCardDate} />
        <CardOwner errorMessage={ownerErrorMessage} owner={owner} updateOwner={updateOwner} />
        <CardSecurityCode errorMessage={cardCodeErrorMessage} cardCode={cardCode} updateCardCode={updateCardCode} />
        <CardPassword
          errorMessage={pwdErrorMessage}
          setErrorMessage={setPwdErrorMessage}
          pwd={pwd}
          updatePwd={updatePwd}
          isCorrectPwd={isCorrectPwd}
        />
        <Footer>
          <TextButton hexColor={LABEL_PRIMARY_COLOR} isVisible={isRequiredCompleted}>
            다음
          </TextButton>
        </Footer>
      </Form>
    </main>
  );
}

export default App;
