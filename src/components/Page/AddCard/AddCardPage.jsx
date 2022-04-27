import React from "react";
import styled from "styled-components";
import Button from "../../Button";
import Header from "../../Header";
import CardNumber from "./CardNumber";
import ExpiredNumber from "./ExpiredDate";
import CardOwnerName from "./CardOwnerName";

import Card from "../../Card";
import Password from "./Password";
import SecureCode from "./SecureCode";

const AddCardPage = () => {
  return (
    <Container>
      <Header title="카드 추가" />
      <Card
        cardName="호프"
        name="SALLY"
        expiredDate="03/23"
        cardNumber={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
      />
      <CardNumber />
      <ExpiredNumber />
      <CardOwnerName />
      <SecureCode />
      <Password />
      <Button></Button>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

export default AddCardPage;
