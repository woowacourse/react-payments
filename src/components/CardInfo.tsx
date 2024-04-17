import React from 'react';
import styled from "styled-components";
import PaymentsFormSection from "./PaymentsFormSection";
import { CARD_NUMBER_PROP, EXPIRATION_PROP, NAME_PROP } from "../constants/cardInfoProp";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const CardInfo = () => {
  return (
    <Container>
      <PaymentsFormSection {...CARD_NUMBER_PROP} />
      <PaymentsFormSection {...EXPIRATION_PROP} />
      <PaymentsFormSection {...NAME_PROP} />
    </Container>
  )
}

export default CardInfo