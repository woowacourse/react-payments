import React, { useContext, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

import Header from '../common/Header';
import Footer from '../common/Footer';
import TextButton from '../common/TextButton';

import CardNumber from './CardNumber';
import CardOwner from './CardOwner';
import CardPassword from './CardPassword';
import CardSecurityCode from './CardSecurityCode';
import CardShape from './CardShape';
import DueDate from './DueDate';
import useInputHandler from '../../hooks/useInputHandler';
import { validateCardCode, validatePassword } from '../../validator';
import { LABEL_PRIMARY_COLOR } from '../../style';
import { Form } from '../common/styled';
import { CardInfoContext, PathContext } from '../../context';

function CardFormPage({
  targetRef,
  cardNoErrorMessage,
  ownerErrorMessage,
  setCardCompany,
  setCardNoErrorMessage,
  updateCardNumbers,
  setCardDate,
  updateOwner,
}) {
  const setPath = useContext(PathContext);
  const { cardCompany, cardNumbers, cardDate, owner } = useContext(CardInfoContext);

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

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

  const handleClickBackArrow = () => {
    setPath('list-card');
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!isRequiredCompleted) return;
    setPath('submit-card');
  };

  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight,
      });
    }
  }, []);

  useEffect(() => {
    setCardCompany({ name: '', hexColor: '#ffffff' });
    updateCardNumbers({ name: 'cardNoA', value: '' });
    updateCardNumbers({ name: 'cardNoB', value: '' });
    updateCardNumbers({ name: 'cardNoC', value: '' });
    updateCardNumbers({ name: 'cardNoD', value: '' });
    setCardDate({ month: '', year: '' });
    updateOwner({ name: 'name', value: '' });
  }, []);

  return (
    <>
      <Header
        leadingButton={
          <IoIosArrowBack size={30} color="#525252" onClick={handleClickBackArrow} style={{ cursor: 'pointer' }} />
        }>
        카드추가
      </Header>
      <Form onSubmit={handleSubmit}>
        <CardShape
          dimensions={dimensions}
          cardCompany={cardCompany}
          setCardCompany={setCardCompany}
          cardNumbers={cardNumbers}
          cardOwner={owner}
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
    </>
  );
}

export default CardFormPage;
