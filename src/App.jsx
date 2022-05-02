import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';

import {
  CardNumber,
  CardOwner,
  CardPassword,
  CardSecurityCode,
  CardShape,
  Footer,
  Header,
  TextButton,
  DueDate,
} from './components';

function App() {
  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [cardNumber, setCardNumber] = useState('');
  const [cardOwnerName, setCardOwnerName] = useState('NAME');
  const [cardDate, setCardDate] = useState('');
  const [isCorrectCardDate, setIsCorrectCardDate] = useState(false);
  const [isCorrectOwnerName, setIsCorrectOwnerName] = useState(false);
  const [isCorrectSecurityCode, setIsCorrectSecurityCode] = useState(false);
  const [isCorrectCardPwd, setIsCorrectCardPwd] = useState(false);
  const [isAllCompleted, setIsAllCompleted] = useState(false);
  const cardNumberCallback = numbers => setCardNumber(numbers);
  const cardDateCallback = date => setCardDate(date);
  const ownerNameCallback = ownerName => setCardOwnerName(ownerName);
  const correctOwnerNameCallback = isCorrect => setIsCorrectOwnerName(isCorrect);
  const correctSecurityCodeCallback = isCorrect => setIsCorrectSecurityCode(isCorrect);
  const correctCardPwdCallback = isCorrect => setIsCorrectCardPwd(isCorrect);

  useEffect(() => {
    const isOkCardNumber = cardNumber !== '';
    const allOk = [
      isOkCardNumber,
      isCorrectCardDate,
      isCorrectOwnerName,
      isCorrectSecurityCode,
      isCorrectCardPwd,
    ].every(ok => ok);
    setIsAllCompleted(allOk);
  }, [cardNumber, isCorrectCardDate, isCorrectOwnerName, isCorrectSecurityCode, isCorrectCardPwd]);

  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight,
      });
    }
  }, []);

  return (
    <div className="app" ref={targetRef}>
      <Header>{'카드추가'}</Header>
      <CardShape dimensions={dimensions} cardNumber={cardNumber} cardOwnerName={cardOwnerName} cardDate={cardDate} />
      <CardNumber cardNumberCallback={cardNumberCallback} />
      <DueDate
        dimensions={dimensions}
        cardDateCallback={cardDateCallback}
        setIsCorrectCardDate={setIsCorrectCardDate}
      />
      <CardOwner ownerNameCallback={ownerNameCallback} correctOwnerNameCallback={correctOwnerNameCallback} />
      <CardSecurityCode correctSecurityCodeCallback={correctSecurityCodeCallback} />
      <CardPassword correctCardPwdCallback={correctCardPwdCallback} />
      <Footer>
        <TextButton
          hexColor="#525252"
          isVisible={isAllCompleted}
          handleClick={() => alert('카드 등록이 완료 되었습니다 :D')}>
          다음
        </TextButton>
      </Footer>
    </div>
  );
}

export default App;
