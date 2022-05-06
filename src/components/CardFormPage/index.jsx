import React, { useContext, useLayoutEffect, useMemo, useState } from 'react';
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
import { LABEL_PRIMARY_COLOR } from '../../style';
import { Form } from '../common/styled';
import { CardInfoContext, SetPathContext } from '../../context';

function CardFormPage({ targetRef }) {
  const setPath = useContext(SetPathContext);
  const { cardCompany, cardNumbers, cardDate, owner, cardCode, pwd } = useContext(CardInfoContext);

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

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
          cardNumbers={cardNumbers}
          cardOwner={owner}
          cardDate={cardDate}
        />
        <CardNumber cardNumbers={cardNumbers} isCorrectCardNumber={isCorrectCardNumber} />
        <DueDate dimensions={dimensions} cardDate={cardDate} />
        <CardOwner owner={owner} />
        <CardSecurityCode cardCode={cardCode} />
        <CardPassword pwd={pwd} isCorrectPwd={isCorrectPwd} />
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
