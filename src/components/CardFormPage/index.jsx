import React, { useContext, useLayoutEffect, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

import { LABEL_PRIMARY_COLOR } from '../../style';

import Header from '../common/Header';
import Footer from '../common/Footer';
import TextButton from '../common/TextButton';
import { Form } from '../common/styled';

import CardNumber from './CardNumber';
import CardOwner from './CardOwner';
import CardPassword from './CardPassword';
import CardSecurityCode from './CardSecurityCode';
import CardShape from './CardShape';
import DueDate from './DueDate';

import { CardInfoContext, SetPathContext } from '../../context';
import { isRequiredCompleted } from './checkInputs';

function CardFormPage({ targetRef }) {
  const setPath = useContext(SetPathContext);
  const cardInfo = useContext(CardInfoContext);

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const handleClickBackArrow = () => {
    setPath('list-card');
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!isRequiredCompleted(cardInfo)) return;
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
        <CardShape dimensions={dimensions} />
        <CardNumber />
        <DueDate dimensions={dimensions} />
        <CardOwner />
        <CardSecurityCode />
        <CardPassword />
        <Footer>
          <TextButton hexColor={LABEL_PRIMARY_COLOR} isVisible={isRequiredCompleted(cardInfo)}>
            다음
          </TextButton>
        </Footer>
      </Form>
    </>
  );
}

export default CardFormPage;
