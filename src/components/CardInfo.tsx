import React, { useState } from 'react';
import styled from "styled-components";
import CardNumbersFormSection from './CardNumbersFormSection';
import ExpirationDateFormSection from './ExpirationDateFormSection';
import NameFormSection from './NameFormSection';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const CardInfo = ({ changeCardInfo }) => {

  const changeCardNumber = (cardNumber) => {
    changeCardInfo(prev => ({ ...prev, cardNumber: cardNumber }))
  }

  const changeExpiration = ({ month, year }) => {
    changeCardInfo(prev => ({ ...prev, expirationMonth: month, expirationYear: year }))
  }

  const changeName = (name) => {
    changeCardInfo(prev => ({ ...prev, name: name }))
  }


  return (
    <Container>
      <CardNumbersFormSection changeCardNumber={changeCardNumber} />
      <ExpirationDateFormSection changeExpiration={changeExpiration} />
      <NameFormSection changeName={changeName} />
    </Container>
  )
}

export default CardInfo